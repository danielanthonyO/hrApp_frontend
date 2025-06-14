import React, { useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import styles from "./PersonCard.module.css";
import {FiEdit2, FiEye,FiX,FiSave,FiUser,FiDollarSign,FiMapPin,
        FiBriefcase,FiCalendar,FiMail,FiPhone,FiCode,} from "react-icons/fi";

// Animal name to emoji mapping
const animalEmojis = {
  owl: "🦉",
  cat: "🐱",
  dog: "🐶",
  panda: "🐼",
  fox: "🦊",
  lion: "🦁",
  tiger: "🐯",
  bear: "🐻",
  rabbit: "🐰",
  wolf: "🐺",
};

const PersonCard = ({
  id,
  name,
  title,
  salary: initialSalary,
  phone,
  email,
  animal,
  startDate,
  location: initialLocation,
  department: initialDepartment,
  skills: initialSkills,
  onUpdateEmployee,
}) => {
  const { patch } = useAxios();
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [salary, setSalary] = useState(initialSalary);
  const [location, setLocation] = useState(initialLocation);
  const [department, setDepartment] = useState(initialDepartment);
  const [skills, setSkills] = useState(initialSkills.join(", "));
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  // Calculate years worked
  const calculateYearsWorked = () => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInMs = now - start;
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
    return diffInYears;
  };

  const yearsWorked = calculateYearsWorked();
  const isWorkAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;
  const isNewEmployee = yearsWorked < 0.5;


  // Get animal emoji
  const getAnimalEmoji = () => {
    if (!animal) return null;
    const lowerCaseAnimal = animal.toLowerCase();
    return animalEmojis[lowerCaseAnimal] || animal;
  };

  const animalEmoji = getAnimalEmoji();

  const handleEditClick = () => {
    setIsEditing(true);
    setSavedMessage("");
  };

  const handleCancelClick = () => {
    setSalary(initialSalary);
    setLocation(initialLocation);
    setDepartment(initialDepartment);
    setSkills(initialSkills.join(", "));
    setIsEditing(false);
    setSavedMessage("");
  };

  const handleSaveClick = async () => {
    setSaving(true);
    const updates = {};

    if (Number(salary) !== initialSalary) updates.salary = Number(salary);
    if (location !== initialLocation) updates.location = location;
    if (department !== initialDepartment) updates.department = department;

    const skillsArray = skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (JSON.stringify(skillsArray) !== JSON.stringify(initialSkills)) {
      updates.skills = skillsArray;
    }

    if (Object.keys(updates).length === 0) {
      setIsEditing(false);
      setSaving(false);
      return;
    }

    try {
      const res = await patch(`/employees/${id}`, updates);
      onUpdateEmployee(res.data);
      setIsEditing(false);
      setSavedMessage("Changes saved successfully!");
      setTimeout(() => setSavedMessage(""), 3000);
    } catch (error) {
      console.error("Failed to save changes:", error);
      setSavedMessage("Failed to save changes");
      setTimeout(() => setSavedMessage(""), 3000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div className={styles.personCard} whileHover={{ y: -5 }}>
      <div className={styles.cardHeader}>
        <div className={styles.userIcon}>
          <FiUser />
        </div>
        <div>
          <h3 className={styles.name}>
            {name}
            {animalEmoji && (
              <span className={styles.animal}> {animalEmoji}</span>
            )}
          </h3>
          <p className={styles.title}>{title}</p>
          {isWorkAnniversary && (
            <div className={styles.anniversaryBadge}>
              🎉 {Math.floor(yearsWorked)} year anniversary! Schedule
              recognition meeting.
            </div>
          )}
          {isNewEmployee && (
            <div className={styles.probationBadge}>🔔 Schedule probation review.</div>
          )}
        </div>
      </div>

      <div className={styles.cardBody}>
        {isEditing ? (
          <div className={styles.editForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                <FiDollarSign className={styles.inputIcon} />
                Salary
              </label>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                disabled={saving}
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                <FiMapPin className={styles.inputIcon} />
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled={saving}
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                <FiBriefcase className={styles.inputIcon} />
                Department
              </label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                disabled={saving}
                className={styles.formInput}
              />
            </div>

            {showDetails && (
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  <FiCode className={styles.inputIcon} />
                  Skills
                </label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  disabled={saving}
                  className={styles.formInput}
                  placeholder="Comma separated skills"
                />
              </div>
            )}

            <div className={styles.buttonGroup}>
              <button
                onClick={handleSaveClick}
                disabled={saving}
                className={`${styles.button} ${styles.saveButton}`}
              >
                <FiSave /> {saving ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleCancelClick}
                disabled={saving}
                className={`${styles.button} ${styles.cancelButton}`}
              >
                <FiX /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.infoItem}>
              <FiDollarSign className={styles.infoIcon} />
              <span className={styles.infoLabel}>Salary:</span>
              <span>€{salary.toLocaleString()}</span>
            </div>
            <div className={styles.infoItem}>
              <FiMapPin className={styles.infoIcon} />
              <span className={styles.infoLabel}>Location:</span>
              <span>{location}</span>
            </div>
            <div className={styles.infoItem}>
              <FiBriefcase className={styles.infoIcon} />
              <span className={styles.infoLabel}>Department:</span>
              <span>{department}</span>
            </div>

            {showDetails && (
              <>
                <div className={styles.infoItem}>
                  <FiCalendar className={styles.infoIcon} />
                  <span className={styles.infoLabel}>Start Date:</span>
                  <span>{new Date(startDate).toLocaleDateString()}</span>
                </div>
                <div className={styles.infoItem}>
                  <FiCalendar className={styles.infoIcon} />
                  <span className={styles.infoLabel}>Years Worked:</span>
                  <span>{yearsWorked.toFixed(1)} years</span>
                </div>
                <div className={styles.infoItem}>
                  <FiMail className={styles.infoIcon} />
                  <span className={styles.infoLabel}>Email:</span>
                  <span>{email}</span>
                </div>
                <div className={styles.infoItem}>
                  <FiPhone className={styles.infoIcon} />
                  <span className={styles.infoLabel}>Phone:</span>
                  <span>{phone}</span>
                </div>
                <div className={styles.infoItem}>
                  <FiCode className={styles.infoIcon} />
                  <span className={styles.infoLabel}>Skills:</span>
                  <div className={styles.skills}>
                    {initialSkills.map((skill, i) => (
                      <span key={i} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className={styles.buttonGroup}>
              <button
                onClick={handleEditClick}
                className={`${styles.button} ${styles.editButton}`}
              >
                <FiEdit2 /> Edit
              </button>
              <button
                onClick={() => setShowDetails((prev) => !prev)}
                className={`${styles.button} ${styles.detailsButton}`}
              >
                <FiEye /> {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </>
        )}

        {savedMessage && (
          <motion.div
            className={styles.savedMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {savedMessage}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PersonCard;
