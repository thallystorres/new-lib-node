# 📊 Text Analyzer – Library for Word Repetition Analysis

This project is a JavaScript library that analyzes `.txt` files and checks how many times each word is repeated in each paragraph.  

## 🚀 Requirements  

Make sure you have the following installed:  

- **Node.js** (version X or later)  
- **Required packages**:  
  ```sh
  npm install chalk commander
  ```  
- **Operating system**: Linux, macOS or Windows  

## ▶️ How to Run  

1. Clone the repository and install dependencies:  
   ```sh
   git clone https://github.com/your-username/text-analyzer.git
   cd text-analyzer
   npm install
   ```  

2. Run the program with the command:  
   ```sh
   node src/cli.js -t <file_path> -d <destination_folder>
   ```  
   📌 If you need help, use:  
   ```sh
   node src/cli.js --help
   ```  

### 📌 Parameters:  

- `-t, --texto`: Path to the `.txt` file to be analyzed.  
- `-d, --destino`: Directory where the analysis file will be saved.  

### 📍 Example usage:  

```sh
node src/cli.js -t files/my-text.txt -d results/
```  

📤 **Expected output**:  
```txt
Analyzing file: my-text.txt...
Results saved in: results/analysis.txt
```  

## 📜 License  

This project is licensed under the [MIT License](LICENSE).
