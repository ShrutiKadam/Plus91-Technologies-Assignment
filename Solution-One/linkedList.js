class Node {
    // constructor
    constructor(element)
    {
        this.element = element;     //holds data of node
        this.next = null            //pointer to the next node
    }
}
// linkedlist class
class LinkedList {
    constructor()
    {
        this.head = null;   //stores the first node of a List
        this.size = 0;      //number of nodes in a List
    }

    //adds an element at given index of the list
    insertAt(element, index)
        {
            if (index < 0 || index > this.size)
                return console.log("Please enter a valid index.");
            else {
                // creates a new node
                var node = new Node(element);
                var current, prev;
        
                current = this.head;
        
                // add the element to the first index
            
                if (index == 0) {  
                     //if index is zero add an element at the front of the list and make it head
                    node.next = this.head;
                    this.head = node;
                } else {
                    current = this.head;
                    var it = 0;
                    // iterate over the list to find  the position to insert
                    while (it < index) {
                        it++;
                        prev = current;
                        current = current.next;
                    }
        
                    // adding an element
                    node.next = current;
                    prev.next = node;
                }
                this.size++;
            }
         }

    // removes an element from the specified location
    removeFrom(index)
        {
                if (index < 0 || index >= this.size)
                    return console.log("Please Enter a valid index");
                else {
                    var current, prev, it = 0;
                    current = this.head;
                    prev = current;
            
                    // deleting first element
                    if (index === 0) {
                       //if index is 0 then remove the head and make the next node head of the list
                        this.head = current.next;
                    } else {
                        // iterate over the list to the position to remove an element
                        while (it < index) {
                            it++;
                            prev = current;
                            current = current.next;
                        }
                        // remove the element
                        prev.next = current.next;
                        }
                        this.size--;
                
                        // return the remove element
                        return current.element;
                    }
            }
        // prints the list items
        printList()
        {
            var current = this.head;
            var str = "";
            while (current) {
                str += current.element + " ";
                current = current.next;
            }
            console.log(str);
        }
}

    //creating an object for the Linkedlist class
    var ll = new LinkedList(); 

    // insert 60,50,40,30 at 0,1,2,3 position
    ll.insertAt(60, 0);
    ll.insertAt(50, 1);
    ll.insertAt(40, 2);
    ll.insertAt(30, 3);

    // prints60 50 40 30
    ll.printList();

// remove 2nd element from the list
console.log(ll.removeFrom(2));
  
// prints 60 50 30
ll.printList();