import React from 'react';
import {Modal} from 'react-native';

function CentralModal({
  children,
  isTransparent,
  animationType,
  visible,
  onRequestClose,
}) {
  return (
    <Modal
      transparent={isTransparent}
      animationType={animationType}
      visible={visible}
      onRequestClose={onRequestClose}>
      {children}
    </Modal>
  );
}

export default CentralModal;
