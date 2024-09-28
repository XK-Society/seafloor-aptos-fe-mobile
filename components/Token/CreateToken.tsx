// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { Colors } from '@/constants/Colors';
// import { RootStackParamList } from '@/app/types/navigate';

// export default function CreateToken() {
//     const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
//     const [image, setImage] = useState<string | null>(null);
//     const [description, setDescription] = useState('');

//     // Image Picker
//     const handleImageUpload = async () => {
//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         if (!result.canceled) {
//             setImage(result.assets[0].uri);
//         }
//     };

//     // Submit Token
//     const handleSubmit = () => {
//         console.log('Token Created with description:', description);
//     };

//     // Done Button
//     const handleDone = () => {
//         navigation.navigate('TokenDone');
//         console.log('Token Created');
//     };

//     return (
//         <View style={styles.container}>
//             {/* Page Title */}
//             <View style={styles.titleContainer}>
//                 <Text style={styles.titleShadow}>Create Token</Text>
//                 <Text style={styles.title}>Create Token</Text>
//             </View>

//             {/* Business Image upload */}
//             {image && (
//                 <View style={styles.imageContainer}>
//                     <Image source={{ uri: image }} style={styles.imagePreview} />
//                 </View>
//             )}
//             <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
//                 <Text style={styles.uploadButtonText}>Upload Business Image</Text>
//             </TouchableOpacity>

//             {/* Business Description */}
//             <TextInput
//                 style={styles.descriptionInput}
//                 placeholder="Business Description"
//                 multiline
//                 numberOfLines={4}
//                 value={description}
//                 onChangeText={setDescription}
//             />

//             {/* Submit Business Description */}
//             <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//                 <Text style={styles.submitButtonText}>Submit</Text>
//             </TouchableOpacity>

//             {/* Done create token */}
//             <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
//                 <Text style={styles.doneButtonText}>Done</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',  // Center content vertically
//         alignItems: 'center',       // Center content horizontally
//         padding: 20,
//         backgroundColor: '#ffffff',
//     },
//     titleContainer: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     titleShadow: {
//         fontSize: 28,
//         fontFamily: 'poppins-bold',
//         textAlign: 'center',
//         color: 'rgba(0, 0, 0, 0.5)',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         zIndex: 1,
//         transform: [{ translateX: 99 }, { translateY: 2 }],
//     },
//     title: {
//         color: Colors.PRIMARY,
//         fontSize: 28,
//         textAlign: 'center',
//         fontFamily: 'poppins-bold',
//         zIndex: 2,
//     },
//     imageContainer: {
//         alignItems: 'center',
//         marginVertical: 10,
//     },
//     imagePreview: {
//         width: 150,
//         height: 150,
//         borderRadius: 10,
//         marginBottom: 20,
//     },
//     uploadButton: {
//         backgroundColor: Colors.PRIMARY,
//         padding: 15,
//         borderRadius: 25,
//         alignItems: 'center',
//         width: '80%',
//         marginBottom: 20,
//     },
//     uploadButtonText: {
//         fontFamily: 'poppins-bold',
//         color: '#fff',
//         fontSize: 16,
//     },
//     descriptionInput: {
//         height: 100,
//         width: '80%',
//         borderColor: Colors.PRIMARY,
//         borderWidth: 2,
//         borderRadius: 25,
//         padding: 10,
//         marginTop: 20,
//         fontFamily: 'poppins',
//         textAlignVertical: 'top',
//     },
//     submitButton: {
//         backgroundColor: Colors.PRIMARY,
//         padding: 15,
//         borderRadius: 25,
//         alignItems: 'center',
//         width: '80%',
//         marginTop: 30,
//     },
//     submitButtonText: {
//         fontFamily: 'poppins-bold',
//         color: '#fff',
//         fontSize: 16,
//     },
//     doneButton: {
//         backgroundColor: Colors.PRIMARY,
//         padding: 15,
//         borderRadius: 25,
//         alignItems: 'center',
//         width: '80%',
//         marginTop: 20,
//     },
//     doneButtonText: {
//         fontFamily: 'poppins-bold',
//         color: '#fff',
//         fontSize: 16,
//     },
// });

import { View, Text } from 'react-native'
import React from 'react'
import UploadImage from './CreateToken/UploadImage'
import Rules from '../popup/Rules'

export default function CreateToken() {
  return (
    <View>
        <Rules />
        <UploadImage />
    </View>
  )
}