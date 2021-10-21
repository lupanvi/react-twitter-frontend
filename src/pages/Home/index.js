import Feed from './Components/Feed'
import MainLayout from 'Layouts/MainLayout';

function App() {

  return (
	<MainLayout>		
		<Feed data-test="component-feed" />					
	</MainLayout>
  );
}

export default App;