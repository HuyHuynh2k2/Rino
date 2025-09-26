import linkedlist from "../utils/images/linkedlist.png";
import tree from "../utils/images/tree.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DataStructurePage() {
  return (
    <div className="flex">
      <div className="w-[10%]"></div>
      <div className=" w-[80%] p-4">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-3xl">DATA STRUCTURE</h1>
        </div>

        {/* Array */}
        <div className="mb-[4rem]">
          <div>
            <h2 className="text-2xl font-bold mb-[1rem]">1. Array</h2>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="text-[1rem] font-bold">Definition: </h3>
            <p>
              An Array is a data structure consisting of a collection of
              elements, typically of the same data type, store in a contiguous
              and accessed by an index of key.
            </p>

            <h3 className="text-[1rem] font-bold">Declaration & Usage: </h3>

            <div className="flex">
              <div className="w-[50%] border-r-3 border-black">
                <p className="font-bold mb-[2rem]">JAVA</p>
                <pre>
                  {`int[] nums1 = new int[4];
int[] nums2 = new int[]{1,2,3,4};

- Insert Value: 
for (int i = 0; i < 3; i++) {
  nums1[i] = i;
}

- Find a length:
nums1.length

- Sorting:
Arrays.sort(nums);

- Fill with numbers:
Arrays.fill(nums, 0);

- Copy
int[] copy = Arrays.copyOf(nums, nums.length);

- Equals and return boolean: 
Arrays.equals(nums, copy);

              `}
                </pre>
              </div>
              <div className="w-[50%] ml-[2rem]">
                <p className="font-bold mb-[2rem]">JAVA SCRIPT</p>
                <pre>
                  {`let nums = [5, 2, 8, 1];

- Push & Pop:
nums.push(10);
nums.pop();

- Shift & Unshift:
nums.shift();
nums.unshift(0);

- Map:
let doubled = nums.map(x => x * 2);

- Filter:
let filtered = nums.filter(x => x > 2);

- Reduce:
let sum = nums.reduce((a, b) => a + b, 0);

- Includes:
nums.includes(5);
              `}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>

        {/* Array List*/}
        <div className="mt-[4rem] mb-[4rem]">
          <div>
            <h2 className="text-2xl font-bold mb-[1rem]">2. ArrayList</h2>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="text-[1rem] font-bold">Definition: </h3>
            <p>
              Some programming languages does not have a clear idea of ArrayList
              since they may just include them all in array data structure such
              as JavaScript and Python.
            </p>

            <p>
              In Java, since when we declare an array we either have to giving
              them a size or initialize the elemenent first, so that would be
              unconvinience in some case when we just need an array but dont
              know how many element we're going to insert on.
            </p>

            <p>
              So there we have, ArrayList data structure, which is dynamic,
              resizable array implementation. It provide a flexible way to store
              and manage collection of objects, offering advantages over
              traiditional arrays.
            </p>

            <p>
              ArrayList is quick when lookup for an random element, since it
              store data in contigous memory that means we could calculate the
              address of target and jump right in their
            </p>

            <h3 className="text-[1rem] font-bold">Declaration & Usage: </h3>

            <div className="flex">
              <div className="w-[50%] border-r-3 border-black">
                <p className="font-bold mb-[2rem]">JAVA</p>
                <pre className="whitespace-pre-wrap">
                  {`import java.util.ArrayList;
import java.util.Arrays;

ArrayList<Integer> list = new ArrayList<>();
ArrayList<String> list2 = new ArrayList<>(Arrays.asList("A", "B", "C"));

- Insert Value: 
for (int i = 0; i < 3; i++) {
  list.add(i);
}

- Find a length:
nums1.size()

- Access the element:
list.get(index);

- Updating element:
list2.set(0, "Taco Bell");

- Deleting value:
list2.remove("A"); -> Remove by value
list2.remove(0); -> Remove by index

- Check existence: 
list2.constains("C");

- Interation: 
for (String str : list2) {
  System.out.println(str);
}

              `}
                </pre>
              </div>
              <div className="w-[50%] ml-[2rem]">
                <p className="font-bold mb-[2rem]">JAVA SCRIPT</p>
                <pre className="whitespace-pre-wrap">
                  {`In Javascript all Arraylist function's would be all included in Array, since we dont have to worry about the size. 
              `}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>

        {/* Linked List*/}
        <div className="mt-[4rem] mb-[4rem]">
          <div>
            <h2 className="text-2xl font-bold mb-[1rem]">3. Linked List</h2>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="text-[1rem] font-bold">Definition: </h3>
            <p>
              A Linked List is linear data structure where elements, called
              node, are not stored in a contigous memory location. Instead, each
              node contains: Data and Pointer.
            </p>
            <p>1. Data: the value you store</p>
            <p>2. Pointer/Reference: a link to the next node in sequence</p>
            <p>
              <p>- No fixed size: It would grow/shrink dynamically</p>
              <p>- Elements are not stored in contigous memory</p>
              <p>
                - Insertion/Deletion is faster O(1) if you have a reference to
                the node
              </p>
              <p>- Random access is slow (O(n) to find an element)</p>
            </p>
            <p>
              <p>+ Linedlist types:</p>
              <p>Singly Linkedlist - each node points to the next node</p>
              <p>Doubly Linkedlist - node have next and prev pointers</p>
              <p>Circular Linked List — last node points back to the first</p>
            </p>

            <p>
              Quick Note: <b>Contigous memory</b> means all elements are store
              next to each other in RAM, without gaps, in a single contigous
              block of memory.
            </p>

            <img src={linkedlist} className="w-[50rem] h-[30rem]" />

            <h3 className="text-[1rem] font-bold">Declaration & Usage: </h3>

            <div className="flex">
              <div className="w-[50%] border-r-3 border-black">
                <p className="font-bold mb-[2rem]">JAVA</p>
                <pre className="whitespace-pre-wrap">
                  {`class Node {
  int data;
  Node next;

  public Node(int data) {
      this.data = data;
      this.next = null;
  }
}

public void add(int data) {
    Node newNode = new Node(data);
    if (head == null) {
        head = newNode;
    } else {
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    size++;
}

public void addAtIndex(int index, int data) {
    if (index < 0 || index > size) throw new IndexOutOfBoundsException();

    Node newNode = new Node(data);

    if (index == 0) {
        newNode.next = head;
        head = newNode;
    } else {
        Node current = head;
        for (int i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    size++;
}



              `}
                </pre>
              </div>
              <div className="w-[50%] ml-[2rem]">
                <p className="font-bold mb-[2rem]">JAVA SCRIPT</p>
                <pre className="whitespace-pre-wrap">
                  {`class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

- Example of moving node and it connect around: 
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;

            console.log(curr);
        }

        return prev;
    }
}

Explaination: So the goal is to reverse the linkedlist backward, so we use prev node which would store null at the beginning, so using while loop as long as the current node !== null then we move on, we set current.next = prev then prev = current and the reason why we use temp = current.next at very beginning was because we want to store it (to move to new node to satisfy the condition of why loop) before change it.

              `}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Tree */}
        <div className="mt-[4rem] mb-[4rem]">
          <div>
            <h2 className="text-2xl font-bold mb-[1rem]">4. Tree</h2>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="text-[1rem] font-bold">I. Definition: </h3>
            <p>
              Tree data structure is a hierachical structure that is used to
              represent and organize data in th eform of parent cild
              relationship.
            </p>

            <img src={tree} className="w-[30rem] h-[20rem]" />

            <p className="font-bold">II. Basic Term in Tree DS</p>
            <p>
              - Parent Node: The node which is an immediate. predescessorof a
              node is called the parent node. <b>B</b> is the parent node of{" "}
              <b>D, E.</b>
            </p>

            <p>
              - Child Node: The node which is the immediate successor of a node
              is called the child node of that node. Examples: <b>D, E</b> are
              child node of <b>B</b>.
            </p>

            <p>
              - Root Node: The topmost node of a tree or the node which does not
              have any parent node is called the root node. <b>A</b> is the root
              node of the tree. A non-empty tree must contain exactly one root
              node and exactly one path from the root to all other nodes of the
              tree.
            </p>
            <p>
              - Leaf Node or External Node: The nodes which do not have any
              child nodes are called leaf nodes. <b>I, J, K, F, G, H</b> are the
              leaf nodes of the tree.
            </p>

            <p>
              - Ancestor of a Node: Any predecessor nodes on the path of the
              root to that node are called Ancestors of that node. <b>A,B</b>
              are the ancestor nodes of the node <b>E</b>
            </p>
            <p>
              - Sibling: Children of the same parent node are called siblings.{" "}
              <b>D,E</b> are called siblings.
            </p>

            <p>
              - Level of a node: The count of edges on the path from the root
              node to that node. The root node has level 0.
            </p>

            <p>
              - Internal node: A node with at least one child is called Internal
              Node.
            </p>

            <p>
              - Neighbour of a Node: Parent or child nodes of that node are
              called neighbors of that node.
            </p>

            <p>- Subtree: Any node of the tree along with its descendant.</p>

            <SyntaxHighlighter
              language="javascript"
              style={oneDark}
              showLineNumbers
              wrapLongLines
              customStyle={{
                borderRadius: "0.5rem",
                padding: "1rem",
                fontSize: "0.9rem",
                marginBottom: "2rem",
              }}
            >
              {`
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

const root = new TreeNode("root");
const child1 = new TreeNode("child1");
const child2 = new TreeNode("child2");

root.addChild(child1);
root.addChild(child2);

console.log(root);
              `}
            </SyntaxHighlighter>

            <p>
              * Tree data structure can be classified into three types base on
              the number of each node of the tree can have:
            </p>

            <p>
              <b>Binary Tree</b> In a binary tree, each node can have maximum of
              two children linked to it. Some common type of binary trees
              include full binary tree, complete binary tree, balanced binary
              tree, and degenerate or pathological binary trees
            </p>

            <p>
              <b>Ternary Tree</b> A Ternary Tree is a tree data structure in
              which each node has at most three child nodes, usually
              distinguished as “left”, “mid” and “right”.
            </p>

            <p>
              <b>N-ary Tree or Genereic tree</b> Generic trees are a collection
              of nodes where each node is a data structure that consists of
              records and a list of references to its children(duplicate
              references are not allowed). Unlike the linked list, each node
              stores the address of multiple nodes.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[10%]"></div>
    </div>
  );
}
