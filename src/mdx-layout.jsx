export default function MdxLayout({ children }) {
    return (
      <div className="prose lg:prose-xl">
        {children}
      </div>
    );
  }