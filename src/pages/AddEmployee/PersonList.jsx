import React from 'react';
import { motion } from 'framer-motion';
import PersonCard from './PersonCard';
import styles from "./PersonList.module.css";
import { FiUsers } from "react-icons/fi";



const PersonList = ({ employees, onUpdateEmployee }) => {
  return (
    <section className={styles.section}>
      {/* Header Section */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Employee List</h2>
        <p className={styles.subtitle}>
          Meet the talented individuals who make our company great
        </p>
      </motion.div>

      {/* Employee Cards Grid */}
      <div className={styles.personList}>
        {employees?.length > 0 ? (
          employees.map((emp, index) => (
            <motion.div
              key={emp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <PersonCard {...emp} onUpdateEmployee={onUpdateEmployee} />
            </motion.div>
          ))
        ) : (
          <p>No employees to display.</p>
        )}
      </div>
    </section>
  );
};

export default PersonList;
