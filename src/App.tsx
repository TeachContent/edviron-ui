/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Input } from "./components/Input/Input";
import { Select } from "./components/Select/Select";
import { Form } from "./components/Form/Form";
import { CheckboxInput } from "./components/CheckboxInput/CheckboxInput";
import { TabUi } from "./components/Tab/Tab";
import { Sidebar, SidebarItem } from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { SmallCard } from "./components/SmallCard/SmallCard";
import { BiDollar } from "react-icons/bi";
import { _Table } from "./components/V2/Table/Table";
import { Modal } from "./components/Modal/Modal";
function App() {
  const [show, setShow] = React.useState(false);
  const [gen, setGen] = React.useState({
    name: "Male",
  });
  return (
    <div className=" min-h-screen p-8">
      <SmallCard
        icon={<BiDollar />}
        label={"Onboarding"}
        labelValue={"451"}
        smallLabel={"since last month"}
        smallLabelValue={"+41%"}
        status={"down"}
      />
      <_Table
        heading={"Test Table"}
        data={[
          ["test1", "test2", "som", "tus", "lajs"],
          ...["hello", "world", "hello", "world"].map((d: any) => [
            d,
            d,
            d,
            d,
            d,
          ]),
        ]}
      />
      {/* <button onClick={() => setShow(!show)}>Hello</button> */}
      <Modal title="test" open={show} setOpen={setShow}>
        hellow
      </Modal>

      <div className="mt-10 max-w-md overflow-y-auto max-h-96 scrollbar-hide">
        <p className="min-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          eius veritatis et possimus! Illum ipsa quasi quis ratione, maxime
          dolorum? Incidunt, temporibus debitis molestiae accusamus corporis
          nulla vitae, explicabo in exercitationem ipsum ex! Nisi facere
          officiis harum. Maiores incidunt fuga eum corporis illum adipisci
          nesciunt, quis ullam laborum perspiciatis labore saepe explicabo velit
          debitis sapiente dolores? Natus, quas odio dignissimos iste laboriosam
          nisi necessitatibus error! Tenetur atque iure tempora doloremque
          laborum ipsam amet vero, fugit et consectetur obcaecati consequuntur
          excepturi labore non dolor facilis? Est ex accusamus soluta tempore
          vel temporibus, fuga mollitia iure quidem dicta. Minus natus hic a
          odit delectus excepturi aspernatur fugiat nulla sapiente quod vero
          debitis quibusdam molestiae consequuntur, voluptas at? Natus nam
          blanditiis, quis iure deleniti dolorum architecto ipsam obcaecati
          facilis illo est, veniam nihil ab cupiditate in perferendis
          voluptatibus. Sed, laboriosam enim! Unde animi officiis quod
          aspernatur sapiente, possimus dignissimos amet minima voluptatibus
          iste id iusto expedita nisi necessitatibus molestias architecto odit
          reiciendis totam. Officiis veritatis perspiciatis quam nisi. Magnam
          voluptatum sit, deleniti, dignissimos animi ipsam dicta odio
          voluptatem maxime autem libero consequuntur, eaque praesentium! Quo
          maxime natus, ducimus quidem consectetur perferendis dignissimos sequi
          repudiandae pariatur rem tenetur! Autem nemo ea quasi, odit
          reprehenderit corrupti, quisquam aliquam expedita ipsum
          necessitatibus, tempora dolorem incidunt. Hic culpa eligendi rem
          accusantium aperiam natus autem pariatur, totam libero. Doloribus,
          tempore libero adipisci aliquid fuga iure saepe doloremque, animi
          cupiditate fugiat neque nobis beatae in. Quasi porro voluptatem,
          reprehenderit eum qui voluptatum necessitatibus consequatur neque
          libero ad. Eius velit dolore maxime aliquam necessitatibus eum animi,
          hic vel natus autem sed quae vero dolores? Voluptas nisi excepturi
          aut, blanditiis iure optio dolor tenetur! Autem accusamus enim quasi
          tempora fugiat labore eveniet non nisi quaerat consectetur molestias
          ad, vel doloribus expedita perspiciatis laudantium delectus omnis.
          Quisquam quasi maiores, magnam amet fuga voluptate, odio ex, quia unde
          molestiae magni adipisci aperiam molestias? Fugiat rerum, atque sit
          accusamus minus officiis aspernatur laborum repudiandae voluptas velit
          tempore necessitatibus inventore ullam, est quas saepe reprehenderit,
          exercitationem in ratione? Ullam laboriosam odit delectus at cum,
          quibusdam, eos recusandae excepturi itaque doloribus quasi consequatur
          reiciendis facilis provident distinctio est debitis ut id ratione
          ipsum praesentium inventore commodi asperiores. Rem recusandae cum
          porro illo nulla accusantium error assumenda fugit. Deleniti rem
          consectetur a corporis ea. Maiores, commodi dignissimos! Beatae
          laborum magni aliquam accusantium consequatur deserunt at eaque quo
          minus dicta. Vel vitae quis porro aliquid, quae fuga, a ea alias
          placeat dolores nobis velit numquam magnam sit iste laboriosam
          laudantium tempora saepe ipsum ipsa, nesciunt odio repellendus. At
          maiores sed dicta illum sapiente, fugiat neque aperiam error
          accusantium debitis dolorum harum maxime a temporibus asperiores
          officia, saepe porro laborum eius, odit quam ab eligendi nobis!
          Aliquam debitis ducimus modi nesciunt quaerat voluptatem, hic libero
          molestias eius quisquam maxime culpa maiores aliquid enim a
          accusantium, quam dicta exercitationem. Laboriosam eum ad sed
          corrupti, amet dicta iusto natus, asperiores ab nulla ea fugiat
          exercitationem molestias fugit earum praesentium ipsum quaerat
          temporibus ex distinctio reprehenderit. Ea asperiores magnam magni
          iste nemo laboriosam enim mollitia reprehenderit quae eaque
          necessitatibus fuga nobis, vitae saepe soluta voluptas ullam deserunt
          at consequuntur velit aut impedit dicta? Eum, blanditiis vitae sit
          culpa ducimus provident accusantium nihil impedit ullam illum
          reiciendis pariatur fuga itaque assumenda, doloremque nam facere eos
          quae, rerum quasi ad esse ipsam porro. Atque, vero tenetur assumenda
          perferendis cum sapiente magni consequuntur voluptates voluptas qui
          nam adipisci quidem tempore, quisquam distinctio? Nostrum quos
          repellendus quis exercitationem natus voluptates accusamus facere!
          Incidunt iure accusantium vitae veritatis minima earum cum enim
          pariatur dolore quod illo, tenetur suscipit. Quas corrupti architecto
          numquam? Aperiam, alias voluptatem. Autem, mollitia laboriosam?
          Doloremque aperiam impedit est fugit ut corporis architecto molestias
          rerum minus culpa, qui, consequatur modi distinctio? Vitae similique
          suscipit, minima error sint corporis id. Vero ratione architecto
          consequatur sequi totam vel eaque suscipit culpa recusandae porro,
          mollitia ut laboriosam nobis temporibus eligendi aliquam
          exercitationem debitis? Dolor corporis possimus aut consectetur
          placeat laborum est sapiente laboriosam tempore numquam! Unde, ad,
          itaque, distinctio culpa molestias ab exercitationem adipisci porro
          maxime dolor animi obcaecati tempora quod aliquam modi non eaque
          officiis nam. Sed odio, quaerat tenetur atque fugit, exercitationem
          repudiandae cum voluptate reiciendis doloribus voluptatibus vitae
          blanditiis itaque porro sequi quis in voluptatem, dolorum omnis ad
          quia laborum nisi iusto. Praesentium fugit dolor exercitationem
          doloremque quibusdam? In maiores deleniti perferendis sunt possimus
          nobis corrupti suscipit, sint repellat quod tenetur ut iure quae rerum
          eum cumque quibusdam, dicta magni veritatis repellendus, optio vitae
          est. Voluptas expedita laboriosam eaque facere alias cumque, repellat
          pariatur quidem impedit beatae rem iste. Dolore sequi quidem rerum
          minima exercitationem adipisci nulla cumque placeat nemo,
          necessitatibus officia mollitia modi laudantium, voluptates impedit
          alias reiciendis nihil! Voluptatibus, nemo veniam a cupiditate quos,
          quis ut et magni ratione eaque doloribus, maxime voluptas quo! Enim
          labore, perspiciatis voluptatibus assumenda accusantium ea
          necessitatibus distinctio quidem eum voluptate inventore aspernatur
          praesentium deserunt eaque velit tenetur vel iusto temporibus ut
          facilis modi maiores sunt voluptas similique. Ipsam itaque aliquam
          impedit accusamus, optio sequi illo maiores rem nemo cumque velit
          exercitationem dicta porro doloremque quo amet fugit animi nobis et!
          Alias harum aspernatur fuga sapiente voluptas commodi nemo adipisci!
          Blanditiis, corrupti modi. Accusamus, ad nobis? Mollitia esse quos
          maxime, tempora a perspiciatis veniam saepe nemo, consequuntur error
          animi est. Amet necessitatibus dolores fuga eos nam quisquam dolorum
          voluptatibus, odit fugiat quibusdam neque dolore cupiditate ipsam
          similique perspiciatis consequatur rerum pariatur repellat provident
          voluptatum, deleniti ducimus soluta. Fugiat iste sapiente mollitia
          exercitationem voluptas assumenda saepe impedit sequi explicabo
          blanditiis cum quisquam voluptatibus ad placeat est nesciunt beatae
          aspernatur officiis odio id similique, eaque distinctio autem in. Quod
          sint quisquam praesentium voluptas eos omnis quasi voluptatibus
          consequatur ut pariatur iusto totam, minima accusantium excepturi non
          veniam sed laudantium beatae suscipit? Reiciendis illo repudiandae at
          aspernatur nam quos repellat assumenda iusto eius sequi nisi
          voluptatum corrupti praesentium harum consequatur, sit enim quibusdam
          accusamus soluta optio! Adipisci velit voluptate libero officiis,
          ipsam cum temporibus, omnis eius accusantium excepturi veritatis esse
          ad saepe illum nisi qui tenetur provident voluptatibus in ipsa.
        </p>
      </div>
      {/* <Sidebar schoolName={"Edviron"} Link={Link}>
        <SidebarItem
          icon={<AiFillHome className="text-2xl" />}
          name="Dashboard"
          to="/"
        />
        <SidebarItem
          icon={<FaSchool className="text-2xl" />}
          name="school"
          to="/school"
        />
      </Sidebar> */}
      {/* <Form onSubmit={() => {}}>
          <Input type="text" name="Name" add_error={() => {}} required />
          <Input type="email" name="Email" add_error={() => {}} required />
          <Select
            label="Gender"
            setSelected={setGen}
            selected={gen}
            options={["Male", "Female"].map((d: any) => {
              return { name: d };
            })}
          />
          <CheckboxInput
            name="class"
            options={[1, 2, 3, 4, 5]}
            add_error={() => {}}
            required
          />
          <button>d</button>
        </Form>
        <TabUi /> */}
    </div>
  );
}

export default App;
