# 📌 Sticky Notes Web App

A simple **Sticky Notes application** built with **HTML, JavaScript, and localStorage**.
This app allows users to create, edit, delete, and color-code notes that stay saved even after refreshing the page.

---

## 🚀 Features

* 📝 **Add Notes** – Quickly create notes using the input field.
* 🎨 **Color Selection** – Choose different background colors before creating a note.
* ✏️ **Edit Notes** – Update existing notes anytime.
* 🗑 **Delete Notes** – Remove notes you no longer need.
* 💾 **Persistent Storage** – Notes are saved using **localStorage** and remain after page refresh.
* 📌 **Sticky Note Design** – Uses a sticky note template image (`note.png`) for a realistic look.
* 🔄 **Random Rotation Effect** – Each note appears slightly tilted to mimic real sticky notes.

---

## 🛠 Technologies Used

* **HTML5** – Structure of the application
* **JavaScript (Vanilla JS)** – Application logic and interactivity
* **CSS (Inline styles)** – Layout and visual styling
* **localStorage API** – Saves notes in the browser

---

## 📂 Project Structure

```
sticky-notes-app
│
├── index.html     # Main application file
├── note.png       # Sticky note template image
└── README.md      # Project documentation
```

---

## ⚙️ How the App Works

1. **User writes a note** in the input box.
2. **Select a color** using the color picker.
3. Click **"Add Note"** or press **Enter**.
4. The note is stored in **localStorage** and displayed on the board.
5. Users can **edit or delete** notes anytime.
6. When the page reloads, notes are **loaded from localStorage automatically**.

---

## 💡 Main Functionalities

### Add Note

Creates a new note object containing:

* `id`
* `text`
* `color`
* `timestamp`

### Edit Note

Prompts the user to modify the note text and updates localStorage.

### Delete Note

Removes the note from the array and updates localStorage.

### Render Notes

Displays all notes dynamically on the board.

---

## ▶️ How to Run the Project

1. Download or clone the project.
2. Place the **sticky note template image** as:

```
note.png
```

3. Open:

```
index.html
```

in any web browser.

No installation or dependencies required.

---

## 🎨 Customization Ideas

You can enhance this project by adding:

* 🔍 **Search notes**
* 📱 **Responsive mobile layout**
* 🧲 **Drag and drop notes**
* 🌙 **Dark / light mode**
* ☁️ **Cloud storage or database**
* 📂 **Note categories or tags**

---

## 📸 Example Use Cases

* Quick reminders
* Task lists
* Study notes
* Idea collection
* Daily planning

---

## 📄 License

This project is free to use for **learning and personal projects**.
