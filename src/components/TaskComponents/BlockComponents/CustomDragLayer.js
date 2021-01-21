import * as React from "react";
import { DragLayer } from "react-dnd";

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
}

class CustomDragLayer extends React.Component {
  getItemStyles(currentOffset) {
    console.log(currentOffset);
    // do not move
    if (!currentOffset) {
      return {
        display: "none",
      };
    }

    // move position
    const x = currentOffset.x;
    const y = currentOffset.y;
    const transform = `translate(${x}px, ${y}px) scale(1.05)`;

    return {
      WebkitTransform: transform,
      transform: transform,
    };
  }

  render() {
    const { item, itemType, isDragging, currentOffset } = this.props;

    // do not move
    if (!isDragging) {
      return null;
    }

    // render
    if (itemType === "item") {
      return (
        <div className="p-dragLayer" style={this.getItemStyles(currentOffset)}>
          {item.name}
        </div>
      );
    }
    return null;
  }
}

export default DragLayer(collect)(CustomDragLayer);
