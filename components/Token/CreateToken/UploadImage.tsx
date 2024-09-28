import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, ProgressBarAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';  // Define your Colors object as needed
import { RootStackParamList } from '@/app/types/navigate';

export default function UploadImage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [image, setImage] = useState<string | null>(null);

    // Navigate to the next step
    const handleNextStep = () => {
        navigation.navigate('TokenDescPage');  // Make sure to define the next screen in your stack navigator
    };

    // Image picker
    const handleImageUpload = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <View style={styles.uploadcontainer}>
            <Text style={styles.title}>Upload Image</Text>

            {/* Progress Bar (40%) */}
            <View style={styles.progressBarContainer}>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.4}
                        color={Colors.PRIMARY}
                        style={styles.progressBar}
                    />
                <Text style={styles.progressText}>40% Completed</Text>
            </View>

            {/* Image Preview */}
            {image && (
                <Image source={{ uri: image }} style={styles.imagePreview} />
            )}

            {/* Upload Button */}
            <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                <Text style={styles.uploadButtonText}>Upload Image</Text>
            </TouchableOpacity>

            

            {/* Next Step Button */}
            <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
                <Text style={styles.nextButtonText}>Next Step</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    uploadcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        marginTop: 20,
        color: '#fff',
    },
    imagePreview: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    uploadButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        width: '50%',
        marginBottom: 90,
    },
    uploadButtonText: {
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY,
        fontSize: 16,
    },
    progressBarContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 90,
    },
    progressBar: {
        width: '100%',
        height: 10,
        borderRadius: 5,
        color: '#fff',
    },
    progressText: {
        marginTop: 10,
        fontFamily: 'poppins',
        fontSize: 14,
        color: '#fff',
    },
    nextButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        width: '40%',
        marginTop: 20,
    },
    nextButtonText: {
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY,
        fontSize: 16,
    },
});
