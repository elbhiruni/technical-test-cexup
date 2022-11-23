export default function Header() {
  return (
    <header className="pt-[44px]">
      <nav className="flex justify-between">
        <ul className="flex gap-[24px] items-center text-[#616161] text-sm font-medium">
          <li><img className="w-[112px]" src="https://cexup.com/_nuxt/img/logo.54b1044.png" alt="logo-cexup"/></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Partnership</a></li>
        </ul>
        <ul className="flex gap-x-[20px] items-center">
          <li><a href="#">Help</a></li>
          <li></li>
          <li><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxQzIwIDEuNTUyIDE5LjQ3NDEgMiAxOC44MjM1IDJIMS4xNzY0N0MwLjUyNzA1OSAyIDAgMS41NTIgMCAxQzAgMC40NDggMC41MjcwNTkgMCAxLjE3NjQ3IDBIMTguODIzNUMxOS40NzQxIDAgMjAgMC40NDggMjAgMVpNMS4xNzY0NyA4QzAuNTI1ODgxIDggMCA3LjU1MiAwIDdDMCA2LjQ0OCAwLjUyNTg4MSA2IDEuMTc2NDcgNkgxOC44MjM1QzE5LjQ3MjkgNiAyMCA2LjQ0OCAyMCA3QzIwIDcuNTUyIDE5LjQ3MjkgOCAxOC44MjM1IDhIMS4xNzY0N1pNMTguODIzNSAxNEMxOS40NzQxIDE0IDIwIDEzLjU1MiAyMCAxM0MyMCAxMi40NDggMTkuNDc0MSAxMiAxOC44MjM1IDEySDEuMTc2NDdDMC41MjcwNTkgMTIgMCAxMi40NDggMCAxM0MwIDEzLjU1MiAwLjUyNzA1OSAxNCAxLjE3NjQ3IDE0SDE4LjgyMzVaIiBmaWxsPSIjMjUyQTMxIi8+Cjwvc3ZnPgo=" /></li>
        </ul>
      </nav>
    </header>
  )
}