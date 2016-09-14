# switch-flow-group-discovery
The purpose of this script is to set directory paths from parent and child nodes in XML to private data so they can be used in Switch for folder hierarchy structure when backing up Switch Flows.

This script extracts the child folder names for a flow ID from Switch's flow panes XML file (flowPaneLayout.xml) and sets them to private data. It then writes the parent folders to a generated private data key with an index until there are no more parent folders.

## Flow element properties
### Trigger
- Incoming job

### Target
Select the FlowID to find and match in the FlowPanes XML.
- **Flow ID** - Metadata from XML or Private Data that matches .
- **Flow panes path** - Specify the location of your FlowPanes XML file.
- **Flow group key prefix** - Specify the prefix of the private data key to write.

## Example
```xml
<!-- flowPaneLayout.xml -->
<FlowsPaneLayout>
 <Flow Selected="No" Marker="">124</Flow>
 <Group Expanded="No" Selected="No" Id="1" Description="" Name="New group">
  <Flow Selected="No" Marker="">1</Flow>
  <Flow Selected="No" Marker="">2</Flow>
  <Flow Selected="No" Marker="">33</Flow>
  <Flow Selected="No" Marker="">133</Flow>
 </Group>
 <Flow Selected="No" Marker="">168</Flow>
 <Flow Selected="No" Marker="">169</Flow>
</FlowsPaneLayout>
```
#### Properties
- **Flow ID** - 33
- **Flow group key prefix** - Group

#### Results in private data
- **Group1** => New group
