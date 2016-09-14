# switch-flow-group-discovery
The purpose of this script is to set directory paths from parent and child nodes in XML to private data so they can be used in Switch for folder hierarchy structure when backing up Switch Flows.

Setting child folders when backing up Switch Flows was troublesome with Switch's default 'Set hierarchy path'. This script extracts the child folder names and sets them to private data to be used in Switch's 'Set hierarchy path'. It does this by matching the FlowID from the flow's XML metadata to its counter part in Switch's Flow Panes XML file. It will then determine if it has a parent folder and set the name of that parent folder to private data until it no longer has parent folders. 

## Flow element properties
### Trigger
- Incoming job

### Target
Select the FlowID to find and match in the FlowPanes XML.
- **FlowID** - Metadata from XML or Private Data that matches .
- **Flow panes path** - Specify the location of your FlowPanes XML file.
- **Flow group key prefix** - Specify the prefix of the private data key to write. Example: Prefix = FlowGroupKey Key 1 = FlowGroupKey1