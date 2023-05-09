import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const history = useHistory();

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
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h1>New Meet Up page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetUpPage;
