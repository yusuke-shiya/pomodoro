import React, { Component } from "react";
import { DragSource, DropTarget } from "react-dnd";

const dragSource = DragSource(
  "item",
  {
    beginDrag(props) {
      return props;
    },
  },
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    };
  }
);

const dropTarget = DropTarget(
  "item",
  {
    // drop callback
    drop(dropProps, monitor, dropComponent) {
      const dragProps = monitor.getItem();
      if (dropProps.index !== dragProps.index) {
        dragProps.onDrop(dragProps.index, dropProps.index, dragProps.target);
      }
    },
  },
  (connect) => {
    return {
      connectDropTarget: connect.dropTarget(),
    };
  }
);

class Block extends Component {
  getItemStyles() {
    const { isDragging } = this.props;

    return {
      opacity: isDragging ? 0 : 1,
    };
  }

  render() {
    return this.props.connectDragSource(
      this.props.connectDropTarget(
        <div className="p-block">
          <input
            name="name"
            type="text"
            value={this.props.name}
            onChange={(e) => {
              this.props.handleUpdate(
                this.props.target,
                this.props.index,
                e.target.value
              );
            }}
            className="p-block__input"
          />
        </div>
      )
    );
  }
}

export default dragSource(dropTarget(Block));
