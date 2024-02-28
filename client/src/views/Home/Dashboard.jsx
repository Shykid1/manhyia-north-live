import SideBar from "../../components/Navbar/SideBar";
import Searchbar from "../../components/Searchbar";

function Dashboard() {
  return (
    <>
      <div className="dashboard flex-container gap-5"></div>
      <div className=" flex-container fixed top-0">
        <SideBar />
      </div>

      <div className="mainbodycontent">
        <div className="searchbar">
            <Searchbar/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis
          tempore tempora animi doloribus dolore quasi corrupti ad neque natus?
          Obcaecati accusamus pariatur, inventore doloribus ex minima quo
          deserunt hic aliquid, aperiam voluptate voluptatum nam nulla, amet
          possimus vel ducimus perspiciatis sunt cum aliquam explicabo eligendi!
          Aliquid quis quos provident alias quod illum saepe, harum omnis modi,
          doloribus aut consequatur libero, laborum pariatur minima numquam.
          Esse eum ducimus non voluptatibus ex officiis, odit vel numquam
          repellendus neque fugiat magni accusamus? At dignissimos est neque
          provident obcaecati reprehenderit praesentium voluptate fugiat
          ducimus, eum pariatur culpa. Nesciunt voluptatem sint eos magnam velit
          beatae vero cupiditate ut ratione facere culpa, aliquam amet voluptate
          et doloremque aspernatur est obcaecati consequuntur quam accusantium
          corrupti odit magni. Repellat omnis, nisi, harum commodi natus ipsum
          culpa debitis nemo sint impedit iusto delectus labore. Vitae
          reiciendis officiis sunt magni, exercitationem officia veniam modi
          consequuntur temporibus commodi in quos laborum sit velit corporis
          eius a porro ad maxime recusandae cupiditate omnis? At saepe aliquam
          veniam laudantium velit, voluptas nostrum quod rem, corporis a
          repellendus, amet rerum et praesentium est totam ut soluta
          exercitationem quam veritatis illo tempore! Quia non, quasi hic
          repudiandae porro ratione sequi soluta dolorum voluptate! Maxime.
        </p>
      </div>
    </>
  );
}

export default Dashboard;
