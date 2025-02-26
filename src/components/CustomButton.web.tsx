import React from 'react';

type Props = {
  title: string;
  onClick: () => void;
};

export default function CustomButton({ title, onClick }: Props) {
  return (
    <button style={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}

const styles = {
  button: { backgroundColor: 'red', padding: '10px', borderRadius: '5px', color: '#fff', border: 'none' },
};
