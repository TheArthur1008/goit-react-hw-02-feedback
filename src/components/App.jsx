import Feedback from './Feedback/Feedback';




export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
        padding: 25
      }}
    >
      <Feedback/>
    </div>
  );
};
