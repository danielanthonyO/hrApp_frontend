import React from 'react';

const animalToEmoji = {
  Owl: "🦉",
  Dog: "🐶",
  Cat: "🐱",
  Fox: "🦊",
  Elephant: "🐘",
  Parrot: "🦜",
  Koala: "🐨",
  Lion: "🦁",
  Rabbit: "🐰",
  Bear: "🐻"
};

const PersonCard = ({ name, title, salary, phone, email, animal, startDate, location, department, skills }) => {
  const start = new Date(startDate);
  const now = new Date();
  const yearsWorked = Math.floor((now - start) / (1000 * 60 * 60 * 24 * 365.25));
  const monthsWorked = (now - start) / (1000 * 60 * 60 * 24 * 30.44);
  const emoji = animalToEmoji[animal] || "❓";

  let reminder = null;
  if (monthsWorked < 6) {
    reminder = <p>🔔 Schedule probation review.</p>;
  } else if (yearsWorked > 0 && yearsWorked % 5 === 0) {
    reminder = <p>🎉 Schedule recognition meeting.</p>;
  }

  return (
    <div className="person-card">
      <h3>{name} {emoji}</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Salary:</strong> €{salary}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Skills:</strong> {skills.join(", ")}</p>
      <p><strong>Years at company:</strong> {yearsWorked} years</p>
      {reminder}
    </div>
  );
};

export default PersonCard;
