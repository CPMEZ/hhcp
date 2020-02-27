import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sample-detail',
  templateUrl: 'sample-detail.html',
})
export class SampleDetailPage {

  samplePlan =
    {
      "problems": [
        {
          "text": "Teaching, Training & Coaching",
          "hint": "",
          "goals": [
            {
              "text": "Family/Caregiver will be effective in care management and will know whom to call for questions/concerns by _____",
              "hint": "e.g. sputum changes, chest congestion and specify date/timeline"
            },
            {
              "text": "Family/Caregivers will demonstrate information taught, including the role of reassurance and consistency in activities and schedules by _____",
              "hint": "Specify date/timeline"
            },
            {
              "text": "Patient will appear comfortable; caregiver/family will report no/decreased fear/anxiety/frustration by _____ ",
              "hint": "Specify date/timeline"
            },
            {
              "text": "Caregiver/Family will be taught to care for patient as demonstrated by observation/interview regarding _____  by _____",
              "hint": "Specify date/timeline"
            },
            {
              "text": "Caregiver/Family will integrate information and care regarding implications of disease and terminal nature as evidenced by _____  by ____",
              "hint": "e.g. evidence to support goal met and specify date/timeline"
            },
            {
              "text": "Caregiver/Family will demonstrate _____% compliance with instructions related to care by _____",
              "hint": "Specify date/timeline"
            }
          ],
          "interventions": [
            {
              "text": "Caregiver/Family will log/note patient's daily, consistent routine",
              "hint": "e.g. meal time, naps, medication schedule, hygiene",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            },
            {
              "text": "Teach patient/caregiver/family's about disease process and management",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            }
          ]
        },
        {
          "text": "Hydration/Nutrition/Elimination",
          "hint": "",
          "goals": [
            {
              "text": "Nutrition/Hydration needs will be maintained/addressed as evidenced by patient's weight maintained/increased by _____ lbs.",
              "hint": ""
            }
          ],
          "interventions": [
            {
              "text": "Assess/Implement and monitor bowel regimen, and teach program to family/caregiver",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            },
            {
              "text": "Assessment/Observation/Evaluation of bladder elimination habits and management of incontinence, and assess need for indwelling catheter",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            },
            {
              "text": "Assess amount and frequency of urinary output",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            },
            {
              "text": "Encourage hand held foods to encourage self feeding",
              "hint": "e.g. sandwiches, cookies, milk shakes, comfort foods of patients choice per swallowing ability",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            },
            {
              "text": "Diet counseling for patient with anorexia",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            }
          ]
        },
        {
          "text": "Safety & Mobility",
          "hint": "",
          "goals": [
            {
              "text": "Caregiver/Family will be taught and supported regarding the need for a safe, consistent, and nurturing physical environment by _____",
              "hint": "Specify date/timeline"
            },
            {
              "text": "Caregiver/Family will adhere to the plan of care/POC as evidenced by demonstration and ability of safe and supportive care by ____",
              "hint": "Specify date/timeline"
            }
          ],
          "interventions": [
            {
              "text": "Teach caregiver/family regarding importance of observation of patient's safety",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            },
            {
              "text": "Teach caregiver/family regarding safety of patient in home",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            }
          ]
        },
        {
          "text": "Care Coordination/Case Management/Discharge Planning",
          "hint": "",
          "goals": [
            {
              "text": "Patient will be maintained in home with caregiver/family stating/demonstrating adherence to POC",
              "hint": ""
            },
            {
              "text": "Patient/Caregiver/Family centered home care will be provided based on the patient's/family's unique situation and needs throughout care",
              "hint": "e.g. document care coordination and team communication throughout care"
            }
          ],
          "interventions": [
            {
              "text": "Assist caregiver/family in setting up patient centered routine and stress the importance of adhering to the routine once established",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            }
          ]
        },
        {
          "text": "Homebound Considerations",
          "hint": "",
          "interventions": [
            {
              "text": "Impaired mental status and needs supervision 24 hours a day",
              "hint": "",
              "nursing": true, "OT": false, "PT": false, "speech": false, "social": false, "aide": false, "pharmacist": false, "dietitian": false, "RT": false, "other": ""
            }
          ]
        }
      ]
    }

  constructor() {
  }


}
