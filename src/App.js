import "./App.css";
import CategoryBox from "./components/CategoryBox";
import DeviceBox from "./components/DeviceBox";
import { SmartDevice, SmartBulb, SmartOutlet, SmartTemperature } from "./data";
import { useState, useEffect } from "react";
import DeviceModal from "./components/DeviceModal";
function App() {
  const [type, setType] = useState(SmartDevice[0].type);
  const [array, setArray] = useState(SmartBulb);
  const [size, setSize] = useState(false);
  const [currentItem, setCurrentItem] = useState(array[0]);
  const [modalsArray, setModals] = useState([]);
  const [toggle, setToggle] = useState(currentItem.isTurnedOn);
  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "SmartBulb":
        setArray(SmartBulb);
        setModals([]);
        break;
      case "SmartOutlet":
        setArray(SmartOutlet);
        setModals([]);
        break;
      case "SmartTemperature":
        setArray(SmartTemperature);
        setModals([]);
    }
  }, [type]);

  const updateModals = (data) => {
    if (!modalsArray.includes(data)) {
      setModals([...modalsArray, data]);
    }
  };
  const deleteModal = (id) => {
    setModals(modalsArray.filter((item) => item.id !== id));
  };
  const updateType = (dataFromChild) => {
    setType(dataFromChild);
  };
  const slide = (data) => {
    setToggle(!toggle);
    if (modalsArray.length !== 0) {
      setCurrentItem(data);
    }
  };
  const changeSize = () => {
    changeSize(!size);
  };
  return (
    <div className="App">
      <div className="categories-container">
        {SmartDevice.map((item) => (
          <CategoryBox
            data={item}
            icon={item.icon}
            category={item.type}
            update={updateType}
          />
        ))}
        <CategoryBox icon={"fa-solid fa-plus"} category={"Add"} />
      </div>
      <div className="devices-container">
        {array.map((item) => (
          <DeviceBox
            data={item}
            toggle={toggle}
            slide={slide}
            updateModals={updateModals}
          />
        ))}
      </div>
      <div className="modal-container">
        {modalsArray.map((item) => (
          <DeviceModal
            data={item}
            toggle={toggle}
            currentItem={currentItem}
            deleteModal={deleteModal}
            changeSize={changeSize}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
