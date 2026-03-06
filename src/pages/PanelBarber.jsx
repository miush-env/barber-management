import NavBar from "../components/panelBarber/NavBar"

function PanelBarber() {
return (
    <main>
      <header>
        <NavBar name="John Doe" photo="https://i.pinimg.com/736x/4a/d1/13/4ad113eaace2e06b92f78dc15c1cf8de.jpg" notifications={5} />
      </header>
    </main>
)
}

export default PanelBarber