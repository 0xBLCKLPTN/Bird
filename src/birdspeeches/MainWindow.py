from PyQt6.QtWidgets import QApplication, QWidget, QMainWindow, QHBoxLayout, QVBoxLayout, QPushButton
from PyQt6.QtCore import QSize, Qt 
from PyQt6.QtGui import QColor, QPalette
import sys



class Color(QWidget):
    def __init__(self, color):
        super(Color, self).__init__()
        self.setAutoFillBackground(True)

        palette = self.palette()
        palette.setColor(QPalette.ColorRole.Window, QColor(color))
        self.setPalette(palette)


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setStyleSheet("QVBoxLayout {margin: 0;}")
        self.setStyleSheet("QHBoxLayout {margin: 0;}")


        
        self.__init_window_settings()
        self.__init_main_layout()
   
    def __init_window_settings(self):
        self.setWindowTitle("BirdSpeeches")
        self.setFixedSize(QSize(900, 600))
        #self.setBaseSize(QSize(2000,2000))

    def __init_left_panel_widget(self):
        self.left_panel_widget = QWidget()
        self.left_panel_layout = QVBoxLayout()
        self.left_panel_layout.setContentsMargins(0,0,0,0)
            
        self.left_panel_widget.setLayout(self.left_panel_layout)
        self.left_panel_widget.setObjectName('left-panel')
        self.left_panel_widget.setFixedWidth(300)
        self.left_panel_widget.setContentsMargins(0,0,0,0)

    def __init_right_panel_widget(self):
        self.right_panel_widget = QWidget()
        self.right_panel_layout = QVBoxLayout()
        self.right_panel_layout.setContentsMargins(0,0,0,0)
        
        self.right_panel_widget.setLayout(self.right_panel_layout)
        self.right_panel_widget.setObjectName('right-panel')
        self.right_panel_widget.setContentsMargins(0,0,0,0)
    
    def __apply_css(self):
        self.setStyleSheet("""
            QWidget#left-panel {
                background-color: #336B6E;
            }
            QWidget#right-panel {
                background-color: #F6F6EF;
            }
        """)

    def __init_panels(self):
        self.__init_left_panel_widget()
        self.__init_right_panel_widget()
        self.__apply_css()

    def __init_main_layout(self):
        self.__init_panels()

        self.setContentsMargins(0,0,0,0)
        self.main_layout = QHBoxLayout()

        self.main_layout.addWidget(self.left_panel_widget)
        self.main_layout.addWidget(self.right_panel_widget)
        self.main_layout.setContentsMargins(0,0,0,0)
        
        self.main_widget = QWidget()
        self.main_widget.setLayout(self.main_layout)
        self.main_widget.setContentsMargins(0,0,0,0)
        self.setCentralWidget(self.main_widget)




if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    app.exec()


