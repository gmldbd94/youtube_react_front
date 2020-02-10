import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../store/modules/showinfoModal';
import ShowInfoModal from '../../Components/Rank/ShowInfoModal';

class ShowInfoContainer extends Component {

  handleCancel = () => {
    const {ModalActions} = this.props;
    ModalActions.CancelInfoModal();
    //취소 버튼 누르면 닫기
  }
  render() {
    const { 
      handleCancel
    } = this;
    const { visible } = this.props;
    console.log("모달 상태", this.props);
    return (
      <ShowInfoModal
        visible={visible} onCancel={handleCancel}
      />
    );
  }
}

export default connect(
  (state) => (
    {    
    visible: state.showinfoModal.get('visible'),
    info: state.showinfoModal.get('info'),
  }),
 (dispatch) => ({
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(ShowInfoContainer);