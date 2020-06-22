// module.exports = {

// CreateList:	function(time, patient_Id) {
// 	this.time = time;
// 	this.patient_Id = patient_Id;
// 	this.next = null;
// }

// Add_time:	function(time, head, key) {
// 	var new_node = new CreateList(time, null);
// 	var current = head;

// 	while(key != current.time && current != null) {
// 		current = current.next;
// 	}
// 	if(current != null) {
// 		new_node.next = current.next;
// 		current.next = new_node;
// 	}
// 	else {					//if there is no such node add it to last one
// 		new_node.next = null;
// 		current.next = new_node
// 	}
//     }

// Update:		function(id, head, time) {
// 	var current = head;

// 	while(current.time != time && current != null) {
// 		current = current.next;
// 	}
// 	if(current != null && current.patient_Id == null) {
// 		current.patient_Id = id;
// 	}
// 	else { console.log('This slot is already booked or is invalid'); }
//     }

// removePatient:	function(id, head, time) {
// 	var current = head;

// 	while(current.time != time && current != null) {
// 		current = current.next;
// 	}
// 	if(current != null) {
// 		if(current.patient_Id == id) {
// 			current.patient_Id = null;
// 		}
// 		else { console.log("Invalid patient_Id"); }
// 	}
// }
// }
