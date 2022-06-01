import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Height, Width} from '../Constants/Constants';
import {isNullOrEmpty} from '../Constants/TextUtils';
import {personalCardApiCall} from '../Apis/Repo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  EMPTY_ACHIVEMENT,
  EMPTY_EDUCATION,
  EMPTY_HOBBIES,
  EMPTY_INTERESTS,
  EMPTY_JOBHISTORY,
  EMPTY_MESSAGE,
  EMPTY_PERSONALINFO,
  EMPTY_PORTFOLIO,
  EMPTY_QRCODE,
  EMPTY_SKILLS,
} from '../Constants/Strings';

export default function NewCardScreen(props) {
  const [message, setMessage] = useState('');
  const [qrCode, setQRcode] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [education, setEducation] = useState('');
  const [interests, setInterests] = useState('');
  const [achivements, setAchivements] = useState('');
  const [personalinfo, setPersonalInfo] = useState('');
  const [skills, setSkills] = useState('');
  const [portfolio, setPortFolio] = useState('');
  const [jobHistory, setJobHistory] = useState('');
  let [userData, setUserData] = useState(null);
  const newArray1 = props.route.params.paramKey;
  const PersonalcardScreen4Array = [
    {
      key: 'Introductory Message',
      value: message,
    },
    {
      key: 'QR Code',
      value: qrCode,
    },
    {
      key: 'Hobbies',
      value: hobbies,
    },
    {
      key: 'Education',
      value: education,
    },
    {
      key: 'Interests',
      value: interests,
    },
    {
      key: 'Achievements',
      value: achivements,
    },
    {
      key: 'PersonalInfo',
      value: personalinfo,
    },
    {
      key: 'Skills',
      value: skills,
    },
    {
      key: 'PortFolio',
      value: portfolio,
    },
    {
      key: 'JobHistory',
      value: jobHistory,
    },
  ];

  useEffect(() => {
    console.log('PCS4', props.route.params);
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  const onFinish = () => {
    if (isNullOrEmpty(message)) {
      alert(EMPTY_MESSAGE);
    } else if (isNullOrEmpty(qrCode)) {
      alert(EMPTY_QRCODE);
    } else if (isNullOrEmpty(hobbies)) {
      alert(EMPTY_HOBBIES);
    } else if (isNullOrEmpty(education)) {
      alert(EMPTY_EDUCATION);
    } else if (isNullOrEmpty(interests)) {
      alert(EMPTY_INTERESTS);
    } else if (isNullOrEmpty(achivements)) {
      alert(EMPTY_ACHIVEMENT);
    } else if (isNullOrEmpty(personalinfo)) {
      alert(EMPTY_PERSONALINFO);
    } else if (isNullOrEmpty(skills)) {
      alert(EMPTY_SKILLS);
    } else if (isNullOrEmpty(portfolio)) {
      alert(EMPTY_PORTFOLIO);
    } else if (isNullOrEmpty(jobHistory)) {
      alert(EMPTY_JOBHISTORY);
    } else {
      let PersonalCardMeta = [];
      for (let index = 0; index < newArray1.length; index++) {
        const element = newArray1[index];
        let newObject = {
          PersonalKey: element.key,
          PersonalValue: element.value,
          Ishidden: true,
        };
        PersonalCardMeta.push(newObject);
      }

      for (let index = 0; index < PersonalcardScreen4Array.length; index++) {
        const element1 = PersonalcardScreen4Array[index];
        let newObject1 = {
          PersonalKey: element1.key,
          PersonalValue: element1.value,
          Ishidden: true,
        };
        PersonalCardMeta.push(newObject1);
      }
      console.log('PersonalCardMeta', PersonalCardMeta);

      let object = {
        name: props.route.params.name,
        Email: props.route.params.email,
        ProfilePicture: props.route.params.image,
        UserId: userData.id,
        PhoneNo: userData.phoneno,
        Address: props.route.params.address,
        PersonalCardMeta: PersonalCardMeta,
      };
      console.log('object', object);

      personalCardApiCall(object)
        .then(response => {
          console.log('response', response);
          if (response.data.status == 200) {
            props.navigation.push('Individual', {
              // paramKey: newArray1,
              // paramKey: PersonalcardScreen4Array
              // dont remove this !
            });
          } else {
            alert(CREDIANTIAL_ERROR);
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };

  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <Header
        navigation={props.navigation}
        variant="dark"
        headerName="Add Card"
        onPress={() => {
          props.navigation.navigate('NewPersonalCard3');
        }}
      />
      <NewCardStepPanel step1={true} step2={true} step3={true} step4={true} />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            padding: 20,
          }}>
          <OutlinedInputBox
            placeholder="Introductory Message"
            inputType="text"
            onChange={value => {
              setMessage(value);
            }}
          />
          <OutlinedInputBox
            placeholder="QR Code"
            inputType="text"
            onChange={value => {
              setQRcode(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Hobbies"
            inputType="text"
            onChange={value => {
              setHobbies(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Education"
            inputType="text"
            onChange={value => {
              setEducation(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Interests"
            inputType="text"
            onChange={value => {
              setInterests(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Achievements"
            inputType="text"
            onChange={value => {
              setAchivements(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Personal Info"
            inputType="text"
            onChange={value => {
              setPersonalInfo(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Skills"
            inputType="text"
            onChange={value => {
              setSkills(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Portfolio"
            inputType="text"
            onChange={value => {
              setPortFolio(value);
            }}
          />
          <OutlinedInputBox
            placeholder="Job History"
            inputType="text"
            onChange={value => {
              setJobHistory(value);
            }}
          />
          <BtnComponent
            placeholder="Finish"
            onPress={() => {
              onFinish();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
