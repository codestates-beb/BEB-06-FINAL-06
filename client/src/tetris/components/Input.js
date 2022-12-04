export const Action = {
    FastDrop: "FastDrop"
  };
  
  export const Key = {
    Space: Action.FastDrop
  };
  
  export const actionIsDrop = (action) =>
    [Action.FastDrop].includes(action);
  
  export const actionForKey = (keyCode) => Key[keyCode];
  