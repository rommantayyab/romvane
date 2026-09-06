function CategoryIcon({ type }) {
  const icons = {
    Ring: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="15" r="6" />
        <path d="M9 9l3-6 3 6" />
      </svg>
    ),
    Necklace: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 4c0 6 3.5 10 8 10s8-4 8-10" />
        <circle cx="12" cy="17" r="2.5" />
      </svg>
    ),
    Bracelet: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="8" ry="5" />
        <ellipse cx="12" cy="12" rx="4" ry="2.4" />
      </svg>
    ),
    Coat: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 3l3 3 3-3 4 4-2 2v11H7V9L5 7z" />
      </svg>
    ),
    Fragrance: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <path d="M10 8V5h4v3" />
      </svg>
    ),
    Outfit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 3l4 2 4-2 3 4-2 2v11H7V9L5 7z" />
        <line x1="12" y1="9" x2="12" y2="20" />
      </svg>
    ),
  };

  return <div className="category-icon">{icons[type] || icons.Ring}</div>;
}

export default CategoryIcon;