// import logo from "./logo.svg";
import "./App.less";
import { Button, Input } from "antd";
const { Search } = Input;

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>

      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        // onSearch={onSearch}
      />
    </div>
  );
}

export default App;
