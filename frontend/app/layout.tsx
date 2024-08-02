export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>ToDo App</h1>
          {children}
        </div>
      </body>
    </html>
  );
}