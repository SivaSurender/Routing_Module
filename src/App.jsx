import Button from "./UI/Button";
import {
  AiFillAlert,
  AiFillAccountBook,
  AiFillCompass,
  AiFillFire,
  AiFillPrinter,
  AiFillPayCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function App() {
  return (
    <div>
      <div>
        <Button primary outline>
          <AiFillAlert />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary>
          <AiFillAccountBook />
          Clicker me again
        </Button>
      </div>
      <div>
        <Button success>
          <AiFillCompass /> Test one
        </Button>
      </div>
      <div>
        <Button warning>
          <AiFillFire />
          Test two
        </Button>
      </div>
      <div>
        <Button danger>
          <AiFillPrinter /> Test three
        </Button>
      </div>
      <div>
        <Button outline>
          <AiFillPayCircle /> Test four
        </Button>
      </div>
      <div>
        <Button rounded outline>
          <AiFillTwitterCircle />
          Test three
        </Button>
      </div>
    </div>
  );
}
