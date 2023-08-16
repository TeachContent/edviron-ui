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
      <button onClick={() => setShow(!show)}>Hello</button>
      <Modal title="test" open={show} setOpen={setShow}>
        hellow
      </Modal>
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
