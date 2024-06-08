function Error({ children }) {
  return (
    <div className="p-10 text-center font-medium contrast-125 text-red-600">
      {children}
    </div>
  );
}

export default Error;
