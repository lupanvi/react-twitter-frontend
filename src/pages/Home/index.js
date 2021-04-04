import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Widgets from './Components/Widgets'

function App() {
  return (
    <div className="home flex h-screen md:mx-6" data-test="component-home">
	    
		<div className="flex lg:flex-1 mx-auto relative">
			<div className="xl:w-72">
				<Sidebar data-test="component-sidebar" />
			</div>
			<div className="flex flex-1">
				<Feed data-test="component-feed" />
				<Widgets data-test="component-widgets" />
			</div>
		</div>

    </div>
  );
}

export default App;