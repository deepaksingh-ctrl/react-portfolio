import React, { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=24");
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError(err.message || "An error occurred while loading products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  // Extract unique categories
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category).filter(Boolean))
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className="products-showcase-section" id="products-api">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">LIVE REST API INTEGRATION</span>
          <h2 className="products-showcase-heading">Featured Products Showcase</h2>
          <p className="products-showcase-subheading">
            Live asynchronous data consumed directly from <code>dummyjson.com/products</code>, demonstrating real-time React state management, filtering, and responsive UI design.
          </p>
        </div>

        {/* Category Filter Tabs */}
        {!loading && !error && categories.length > 1 && (
          <div className="products-filter-wrapper">
            <div className="products-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`prod-filter-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(8);
                  }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading Skeletons */}
        {loading && (
          <div className="row g-4">
            {[...Array(8)].map((_, idx) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={idx}>
                <div className="product-skeleton-card">
                  <div className="skeleton-img"></div>
                  <div className="skeleton-body">
                    <div className="skeleton-line short"></div>
                    <div className="skeleton-line title"></div>
                    <div className="skeleton-line desc"></div>
                    <div className="skeleton-line price"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="products-error-state text-center">
            <div className="error-icon">⚠️</div>
            <h3>Unable to Load Products</h3>
            <p>{error}</p>
            <button className="btn-retry" onClick={fetchProducts}>
              <span>Try Again</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <>
            <div className="row g-4">
              {displayedProducts.map((product) => {
                const originalPrice = (
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2);

                return (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
                    <div className="product-card">
                      {/* Image Thumbnail Container */}
                      <div
                        className="product-img-wrapper"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="product-img"
                          loading="lazy"
                        />

                        {/* Badges */}
                        {product.discountPercentage > 0 && (
                          <span className="prod-badge discount">
                            -{Math.round(product.discountPercentage)}%
                          </span>
                        )}

                        <span className="prod-badge category">
                          {product.category}
                        </span>

                        {/* Quick View Overlay */}
                        <div className="product-img-overlay">
                          <button
                            className="btn-quick-view"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(product);
                            }}
                            title="Quick View"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Content */}
                      <div className="product-card-body">
                        <div className="product-brand-rating">
                          <span className="product-brand">
                            {product.brand || "Brand"}
                          </span>
                          <span className="product-rating">
                            ★ {product.rating.toFixed(1)}
                          </span>
                        </div>

                        <h3
                          className="product-card-title"
                          onClick={() => setSelectedProduct(product)}
                          title={product.title}
                        >
                          {product.title}
                        </h3>

                        <p className="product-card-desc">
                          {product.description.slice(0, 75)}...
                        </p>

                        {/* Price & Action */}
                        <div className="product-card-footer">
                          <div className="product-price-wrap">
                            <span className="current-price">
                              ${product.price.toFixed(2)}
                            </span>
                            {product.discountPercentage > 0 && (
                              <span className="original-price">
                                ${originalPrice}
                              </span>
                            )}
                          </div>

                          <button
                            className="btn-view-product"
                            onClick={() => setSelectedProduct(product)}
                            aria-label="View product details"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {filteredProducts.length > visibleCount && (
              <div className="text-center mt-5">
                <button
                  className="btn-load-more"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                >
                  <span>Load More Products</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        {/* Product Quick View Lightbox Modal */}
        {selectedProduct && (
          <div
            className="product-modal-backdrop"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="product-modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="row g-0">
                {/* Modal Left: Product Image */}
                <div className="col-md-5">
                  <div className="modal-img-container">
                    <img
                      src={selectedProduct.thumbnail || selectedProduct.images?.[0]}
                      alt={selectedProduct.title}
                      className="modal-product-img"
                    />
                    {selectedProduct.discountPercentage > 0 && (
                      <span className="modal-discount-badge">
                        -{Math.round(selectedProduct.discountPercentage)}% OFF
                      </span>
                    )}
                  </div>
                </div>

                {/* Modal Right: Details */}
                <div className="col-md-7">
                  <div className="modal-content-details">
                    <div className="modal-category-rating">
                      <span className="modal-cat-tag">
                        {selectedProduct.category}
                      </span>
                      <span className="modal-rating-badge">
                        ★ {selectedProduct.rating.toFixed(1)} / 5.0
                      </span>
                    </div>

                    <h3 className="modal-prod-title">{selectedProduct.title}</h3>
                    <p className="modal-brand-text">
                      Brand: <strong>{selectedProduct.brand || "Unbranded"}</strong>
                    </p>

                    <div className="modal-price-box">
                      <span className="modal-current-price">
                        ${selectedProduct.price.toFixed(2)}
                      </span>
                      {selectedProduct.discountPercentage > 0 && (
                        <span className="modal-original-price">
                          $
                          {(
                            selectedProduct.price /
                            (1 - selectedProduct.discountPercentage / 100)
                          ).toFixed(2)}
                        </span>
                      )}
                      <span className="modal-stock-status">
                        ● {selectedProduct.availabilityStatus || "In Stock"} ({selectedProduct.stock} left)
                      </span>
                    </div>

                    <p className="modal-desc">{selectedProduct.description}</p>

                    {/* Meta Info */}
                    <div className="modal-meta-grid">
                      <div className="meta-cell">
                        <span className="meta-label">Shipping</span>
                        <span className="meta-val">
                          {selectedProduct.shippingInformation || "Ships in 2-3 days"}
                        </span>
                      </div>
                      <div className="meta-cell">
                        <span className="meta-label">Warranty</span>
                        <span className="meta-val">
                          {selectedProduct.warrantyInformation || "Standard Warranty"}
                        </span>
                      </div>
                      <div className="meta-cell">
                        <span className="meta-label">Return Policy</span>
                        <span className="meta-val">
                          {selectedProduct.returnPolicy || "30 days return"}
                        </span>
                      </div>
                    </div>

                    {/* Modal Action Buttons */}
                    <div className="modal-action-bar">
                      <button
                        className="btn-modal-action primary"
                        onClick={() => {
                          alert(`Added "${selectedProduct.title}" to simulated cart!`);
                          setSelectedProduct(null);
                        }}
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span>Add To Cart</span>
                      </button>

                      <button
                        className="btn-modal-action secondary"
                        onClick={() => setSelectedProduct(null)}
                      >
                        Close Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
