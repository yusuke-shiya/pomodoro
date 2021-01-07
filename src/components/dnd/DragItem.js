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
      if (dropProps.id !== dragProps.id) {
        dragProps.onDrop(dragProps.id, dropProps.id);
      }
    },
  },
  (connect) => {
    return {
      connectDropTarget: connect.dropTarget(),
    };
  }
);

class DragItem extends Component {
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
            defaultValue={this.props.name}
            className="p-block__input"
          />
        </div>
      )
    );
  }
}

export default dragSource(dropTarget(DragItem));
