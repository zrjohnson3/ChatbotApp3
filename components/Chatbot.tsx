import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { fetchAIResponse } from '../api/ai';
import tw from 'tailwind-react-native-classnames';
import ChatBubble from '../components/ChatBubble';


const Chatbot = () => {
    const [messages, setMessages] = useState<{ text: String; type: 'user' | 'admin' }[]>([]); // Array of objects [{role: 'user', content: 'Hello'}, {role: 'system', content: 'Hi!'}
    const [inputMessage, setInputMessage] = useState('');
    const [error, setError] = useState(null);


    // Handle Text Input
    const handleTextInput = (text: string) => {
        setInputMessage(text);
    }

    // Submit Message Button Clicked
    const handleSubmitMessage = async () => {
        // setMessages([...messages, { role: 'user', content: inputMessage }]);
        setMessages(prev => [...prev, { text: inputMessage, type: 'user' }]);
        console.log('Button Clicked, Message sent');
        console.log(inputMessage);

        try {
            const data = await fetchAIResponse(inputMessage);
            console.log(data);
            if (data.choices && data.choices.length > 0) {
                const messageContent = data.choices[0].message.content;
                setMessages(prev => [...prev, { text: messageContent, type: 'admin' }]);
                console.log('Message Content:', messageContent);
                // setOutputMessage(messageContent);
            }
        }
        catch (error: any) {
            setError(error)
            console.error('Error:', error);
        }

    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1 bg-blue-100`}
        >
            <ScrollView contentContainerStyle={tw`items-center`}>
                {/* Header and Messages */}
                <Text style={tw`mt-2 pt-8 px-2 text-center text-lg`}>
                    Welcome to ZenBot!{"\n"}Talk directly to ChatGPT
                </Text>
                <View style={tw`w-full p-4`}>
                    {messages.map((message, index) => (
                        <ChatBubble key={index} text={message.text} type={message.type} />
                    ))}
                </View>
            </ScrollView>

            {/* Input Section */}
            <View style={tw`flex-row p-2 m-2 items-center border-t border-gray-200`}>
                <TextInput
                    onChangeText={handleTextInput}
                    style={tw`flex-1 mx-2 p-2 border border-black rounded-lg`}
                    value={inputMessage}
                    placeholder='Enter your question!'
                    placeholderTextColor={"grey"}
                />
                <TouchableOpacity onPress={handleSubmitMessage} style={tw`bg-blue-400 rounded-lg px-4 py-2`}>
                    <Text style={tw`text-white`}>Send Message</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const themeColors = {
    background: 'bg-blue-50',
    button: 'bg-blue-400 rounded-lg text-white px-4 py-2',
    buttonText: 'text-black',
    input: 'bg-black rounded-lg px-4 py-2',
    text: 'text-blue-900'
};

const inputStyle = tw`flex-1 mx-2 p-2 border border-black rounded-lg`;
const buttonStyle = tw`px-4 py-2 rounded-lg ${themeColors.button}`;

const messageContainerStyle = tw`p-4 border-b border-blue-200 w-full`;
const messageTextStyle = tw`${themeColors.text} text-lg`;

export default Chatbot