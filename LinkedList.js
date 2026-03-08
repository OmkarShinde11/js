// Linked List
// A linked list is a data structure where:
// Each element stores two things:
// The value
// A link (pointer) to the next element
// [10] -> [20] -> [30] -> [40]

// Diff Array and Linked List
// Array:Stored in continuous memory, Fast to access by index, Hard to insert/delete in middle
// Linked List:Stored anywhere in memory (scattered), Slow to access by index, Easy to insert/delete anywhere

// Basic Example
// class Node{
//     constructor(value,next=null){
//         this.value=value;
//         this.next=next;
//     }
// };

function Node(value,next=null){
    this.value=value;
    this.next=next;
}

let arr=[1,2,3,4];
function convert(arr){
    let head=new Node(arr[0]);
    temp=head;
    for(let i=1;i<arr.length;i++){
        temp.next=new Node(arr[i]);
        temp=temp.next;
    };
    // console.log(head);
    return head;
}
let list= convert(arr);
console.log(list);
console.log(list.next);
console.log(list.value);

// print all values of linked list

let random=list;
while(random){
    console.log('print',random.value);
    random=random.next;
};

// length
function length(head){
    let temp=head;
    let count=0;
    while(temp){
        count++;
        temp=temp.next;
    };
    console.log('length',count);
    return count;
};
length(list);

// serach 
function search(head,number){
    let temp=head;
    while(temp){
        if(temp.value==number){
            console.log(true,'Number',temp.value);
            return;
        }
        temp=temp.next;
    };
    console.log(false,'Number not present');
}

search(list,4);

// DELETE OPERATION

// delete head
function deleteHead(head){
    let temp=head;
    temp=temp.next;
    head=temp;
    return head;
};
// list=deleteHead(list);
// console.log(list);

// deleteTail
function deleteTail(head){
    if(head==null || head.next==null) return null;
    let temp=head;
    while(temp.next.next!==null){
        temp=temp.next;
    };
    temp.next=null;
    return head;
}
// list=deleteTail(list);
// console.log(list);

// delete Specific node 
// If suppose given number is tail of linked list then it automatically assign null because of this line previous.next=previous.next.next; where your previous is stand at seconf last it prevoius.next=previous.next.next is always gives you null;
function deleteSpecificNode(head,k){
    if(head===null)return null;
    if(head.next===null){
        head=head.next;
        return head;
    }
    let temp=head;
    let previous=null;
    let count=0;
    while(temp!=null){
        count++;
        if(count===k){
            previous.next=previous.next.next;
            break;
        };
        previous=temp;
        temp=temp.next;
    };
    return head;
};
// list=deleteSpecificNode(list,3);
// list=deleteSpecificNode(list,4);
// list=deleteSpecificNode(list,5);
// console.log(list);

// remove linked list by value
function removeSpecificValue(head,val){
    if(head===null) return head;
    if(head.value===val){
        head=head.next;
        return head;
    }
    let temp=head;
    let previous=null;
    while(temp!==null){
        if(temp.value===val){
            previous.next=previous.next.next;
            break;
        };
        previous=temp;
        temp=temp.next;
    };
    return head;
}
// removeSpecificValue(list,3);
console.log(list);

function addElementAtHead(head,element){
    let temp=new Node(element);
    temp.next=head;
    return temp;
};
// list=addElementAtHead(list,5);
// console.log(list);

function addElementAtTail(head,element){
    if(head===null){
        return new Node(element);
    }
    let temp=head
    while(temp!==null){
        if(temp.next===null){
            temp.next=new Node(element);
            break;
        };
        temp=temp.next;
    };
    return head;
}
// console.log(length(list));
// list=addElementAtTail(list,5);
// console.log(list);
// console.log(length(list));


function addSpecificPosition(head,element,position){
    if(head===null){
        if(position===1){
            let temp=new Node(element);
            return temp;
        }else{
            return null;
        }
    }
    if(position===1){
        let temp=new Node(element);
        temp.next=head;
        return temp;
    }

    let count=0;
    let temp=head;
    while(temp!==null){
        count++;
        if(count==position-1){
            let tempnext=temp.next
            let newNode=new Node(element);
            newNode.next=tempnext;
            temp.next=newNode;
            break;
        }
        temp=temp.next;
    };
    return head;
}
console.log(length(list));
// list=addSpecificPosition(list,10,1);
list=addSpecificPosition(list,10,2);
console.log(list);
console.log(length(list));


// Merge Two Sorted List
// below code is work when you give input as arrays
// function mergeTwoLists(list1,list2){
//     // if(list1.length==0 && list2.length==0) return [];
//     let left=0;
//     let right=0;
//     let result=[];
//     while(left <=list1.length-1 && right <= list2.length-1){
//         if(list1[left] < list2[right]){
//             result.push(list1[left]);
//             left++;
//         }else{
//             result.push(list2[right]);
//             right++;
//         }
//     };

//     while(left <= list1.length-1){
//         result.push(list1[left]);
//         left++;
//     }

//     while(right <= list2.length-1){
//         result.push(list2[right]);
//         right++;
//     };
//     console.log(result);

//     let head=new Node(result[0]);
//     let temp=head;
//     for(let i=1;i<result.length;i++){
//         let newNode=new Node(result[i]);
//         temp.next=newNode;
//         temp=temp.next;
//     }
//     console.log(head);
//     return head;
// }

// mergeTwoLists([1,2,4],[1,3,4]);
// mergeTwoLists([],[]);
// mergeTwoLists([],[0]);

// 21. Merge Two Sorted Lists

function mergeTwoLists(head1,head2){
    let dummy=new Node(0);
    let temp=dummy;
    while(head1!=null && head2!=null){
        if(head1.value < head2.value){
            temp.next=head1
            temp=temp.next;
            head1=head1.next;
        }else{
            temp.next=head2
            temp=temp.next;
            head2=head2.next;
        }
    };
    while(head1!==null){
        temp.next=head1
        temp=temp.next;
        head1=head1.next;
    };
    while(head2!=null){
        temp.next=head2
        temp=temp.next;
        head2=head2.next;
    };
    console.log('mergeList',dummy.next);
    // console.log(length(dummy.next));
    // let dummyList=dummy.next;
    // while(dummyList!=null){
    //     console.log('el',dummyList.value);
    //     dummyList=dummyList.next;
    // }
    return dummy.next;
}
let list1=convert([1,2,4]);
let list2=convert([1,3,4]);
console.log(list1,list2);

mergeTwoLists(list1,list2);


// 83. Remove Duplicates from Sorted List
// Note:Just when we find duplicate then move only temp not prev if we move prev at that time then prev is your deleted node
// See in linked list when you remove any node you just break the connection of that node and it is then no refference so after some time it will garbage collected so it automatically rremove after some time.
function removeDuplicates(head){
    let temp=head;
    let prev=null;
    while(temp!==null){
        if(prev!==null && temp.value==prev.value){
           prev.next=temp.next;
           temp=temp.next;
        }else{
            prev=temp;
            temp=temp.next;
        }
    };
    console.log(head);
    return head;
}

// let duplicateList=convert([1,1,2,3,3]);
// let duplicateList=convert([1,1,2]);
let duplicateList=convert([1,1,1]);
removeDuplicates(duplicateList);

// Here why we use dummy because if that value is at head of linked list then we have to remove that also edge case is [7,7,7,7] 7

function removeElements(head,value){
    let temp=head;
    let dummy=new Node(0,head);
    let prev=dummy
    while(temp!==null){
        if(temp.value===value){
            prev.next=temp.next;
            temp=temp.next
        }else{
            prev=temp;
            temp=temp.next
        }
    };
    console.log(dummy.next);
    return dummy.next;
}

let removedList=convert([1,2,6,3,4,5,6]);
removeElements(removedList,6);
// let removedList=convert([7,7,7,7]);
// removeElements(removedList,7);