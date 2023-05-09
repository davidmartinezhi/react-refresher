import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-a947c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <div>
      <h1>New Meet Up page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetUpPage;
