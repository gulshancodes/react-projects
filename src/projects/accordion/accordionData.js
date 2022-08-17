const accordionData = [
    {
        id: 1,
        title: "What is the virtual DOM?",
        content: "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects."
    },
    {
        id: 2,
        title: "What are synthetic events in React?",
        content: "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers."
    },
    {
        id: 3,
        title: "What are the components in React?",
        content: "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately."
    },
    {
        id: 4,
        title: "Can web browsers read JSX directly?",
        content: "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel"
    },
]

export default accordionData;