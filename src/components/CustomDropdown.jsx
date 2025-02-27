// CustomDropdown.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, Dimensions, Image } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const safeAreaHeight = screenHeight * 0.8;

const CustomDropdown = ({ data, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    //setSelectedItem(item);
    onSelect(item);  // Pass the selected item to parent
    //closeDropDown();
  };

  const closeDropDown = () => {
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.buttonText}>
          {selectedItem ? selectedItem : placeholder || "Select an option"}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <TouchableOpacity style={styles.overlay} onPress={() => setIsOpen(false)}>
            <View style={styles.dropdown}>
              <View style={{ backgroundColor: 'lightgray' }}>
                  <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }}>Select One</Text>
              </View>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelect(item)} style={styles.option}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.optionText}>{item.name}</Text>
                    {
                      item.isSelected && (
                        <Image 
                        source={require('../Images/check.png')}
                        style={{ width: 16, height: 16 }}
                    />
                      )
                    }
                      </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => closeDropDown()} style={styles.actionButton}>
                  <View>
                    <Text style={{ textAlign: 'center' }}>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity onPress={() => closeDropDown()} style={styles.actionButton}>
                  <View>
                    <Text style={{ textAlign: 'center' }}>Ok</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 10,
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    backgroundColor: '#fff',
    width: '80%',
    // height: safeAreaHeight,
    maxHeight: safeAreaHeight,
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonView: {
    flexDirection: 'row',
    //backgroundColor: 'green',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%'
  },
  actionButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    width: '48%',
    borderColor: 'gray',
    borderWidth: 1
  },
  space: {
    width: '2%'
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomDropdown;
