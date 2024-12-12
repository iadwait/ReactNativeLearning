import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalDialogBox = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText} >Show Modal</Text>
            </TouchableOpacity>
            {/* onRequestClose={() => setModalVisible(false)} along with close button this is also needed to avoid platform specific
            issues */}
            <Modal visible={modalVisible} animationType='fade' transparent={true} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Title</Text>
                        <Text style={styles.modalText}>This is message This is message This is message This is message </Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    openButton: {
        backgroundColor: 'purple',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        elevation: 2,
        width: '70%'
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#333"
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#555'
    },
    closeButton: {
        backgroundColor: '#03dace',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        elevation: 2
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold'
    },

})

export default ModalDialogBox