import { Component } from 'react';

const EditMaterialModal = ({ item, onClose, onEdit }) => {
  return (
    <div>
      <h1>Модалка редагування матеріалу</h1>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Тепер потрібно редагувати
      </button>
      <button type="button" onClick={onClose}>
        Закрити
      </button>
    </div>
  );
};

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <p>
          <b>Назва:</b>
          {item.title}
        </p>
        <p>
          <b>Посилання:</b>
          {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete material
        </button>
        <button type="button" onClick={this.openModal}>
          Update material
        </button>
        {isModalOpen && (
          <EditMaterialModal
            item={item}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}
