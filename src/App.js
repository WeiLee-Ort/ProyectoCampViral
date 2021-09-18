import Banner from "./components/Banner.js"
import Layout from "./components/Layout.js";
import Presentation from "./components/Presentation.js"
import StickyFooter from "./components/StickyFooter.js";
import MyForm from "./components/MyForm.js";


function App() {
  return (
    <Layout>
       <Banner></Banner>
       <Presentation></Presentation>
       <StickyFooter></StickyFooter>
       <MyForm></MyForm>
    </Layout>
  );
}

export default App;
