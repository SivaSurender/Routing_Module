import Accordion from "./UI/Accordion";

const item = [
  {
    id: "sdfs43",
    label: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam distinctio atque vel. Dicta delectus molestias deserunt corporis. Debitis deserunt officiis, cum beatae voluptate incidunt tenetur veritatis culpa labore voluptas",
  },

  {
    id: "343dsdf",
    label: "content2",
    content:
      " Debitis, minus voluptate ex, animi blanditiis nobis alias tenetur error laboriosam illum maiores. Cupiditate debitis consequatur et adipisci quas magnam consectetur eni",
  },

  {
    id: "sad687",
    label: "content3",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium id perspiciatis cum nam iure nulla ab omnis. Aliquam enim cum laborum. Cupiditate nisi aut numquam, nam molestiae aperiam rerum quam!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion item={item} />
    </div>
  );
}
