var find_parent_groups = function(flow_node, flow_group_key_prefix, job : Job, s : Switch){
	
	var key_prefix_index = 0;
	var node_basename = "Group";

	while (node_basename == "Group") {
		parent_flow_group_node = flow_node.getParentNode(); // Maybe Group
			
		if(parent_flow_group_node){
			node_basename = parent_flow_group_node.getBaseName();
			if(node_basename == "Group"){
				key_prefix_index++;

				group_name = parent_flow_group_node.getAttributeValue("Name");

				job.setPrivateData(flow_group_key_prefix + key_prefix_index, group_name);
				
				flow_node = parent_flow_group_node;
				
			}
		}
	}
	return key_prefix_index;
}

function jobArrived( s : Switch, job : Job )
{

	var flow_id = s.getPropertyValue("FlowID");
	var flow_panes_path = s.getPropertyValue("FlowPanesPath");
	var flow_group_key_prefix = s.getPropertyValue("FlowGroupKeyPrefix");
	
	// Parse the flow panes doc
	var flow_panes_doc = new Document(flow_panes_path);
	
	// Ensure it is valid XML
	if(!flow_panes_doc.isWellFormed()){
		job.fail("Flow panes XML document is not well formed.");
		return;
	}
	
	// Find the flow node
	var flow_node = flow_panes_doc.evalToNode("//Flow[text()='"+flow_id+"']");
	
	// Ensure it isn't empty
	if(!flow_node){
		job.fail("Could not find a flow node for flow id" + flow_id + ".");
		return;
	}
	
	var number_of_levels = find_parent_groups(flow_node, flow_group_key_prefix, job, s);
	
	s.log(-1, "Flow group levels: " + number_of_levels);
	
	job.sendToSingle(job.getPath());
	
}
