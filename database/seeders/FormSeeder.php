<?php

namespace Database\Seeders;

use App\Models\Form;
use Illuminate\Database\Seeder;

class FormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $forms = [
            [
                'name' => 'Daily Health Check',
                'description' => 'Daily inspection of bird health, feed consumption, and water quality',
                'frequency' => 'Daily',
                'structure' => [
                    'elements' => [
                        [
                            'id' => 'element_1',
                            'type' => 'heading',
                            'label' => 'Daily Health Check',
                            'position' => ['x' => 50, 'y' => 50],
                            'size' => ['width' => 400, 'height' => 40],
                            'properties' => ['text' => 'Daily Health Check', 'level' => 1]
                        ],
                        [
                            'id' => 'element_2',
                            'type' => 'text',
                            'label' => 'Inspector Name',
                            'placeholder' => 'Enter inspector name',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter inspector name', 'required' => true]
                        ],
                        [
                            'id' => 'element_3',
                            'type' => 'date',
                            'label' => 'Inspection Date',
                            'required' => true,
                            'position' => ['x' => 280, 'y' => 120],
                            'size' => ['width' => 150, 'height' => 40],
                            'properties' => ['required' => true]
                        ],
                        [
                            'id' => 'element_4',
                            'type' => 'select',
                            'label' => 'Overall Health Status',
                            'required' => true,
                            'options' => ['Excellent', 'Good', 'Fair', 'Poor'],
                            'position' => ['x' => 50, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['options' => ['Excellent', 'Good', 'Fair', 'Poor'], 'required' => true]
                        ],
                        [
                            'id' => 'element_5',
                            'type' => 'number',
                            'label' => 'Feed Consumption (kg)',
                            'placeholder' => 'Enter daily feed consumption',
                            'required' => true,
                            'position' => ['x' => 280, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter daily feed consumption', 'required' => true, 'min' => 0]
                        ],
                        [
                            'id' => 'element_6',
                            'type' => 'textarea',
                            'label' => 'Health Observations',
                            'placeholder' => 'Describe any health issues observed',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 240],
                            'size' => ['width' => 400, 'height' => 80],
                            'properties' => ['placeholder' => 'Describe any health issues observed', 'required' => false, 'rows' => 3]
                        ]
                    ]
                ],
                'created_at' => '2024-01-15 10:00:00',
                'updated_at' => '2024-01-20 14:30:00',
            ],
            [
                'name' => 'Weekly Maintenance Checklist',
                'description' => 'Weekly equipment maintenance, cleaning schedules, and facility checks',
                'frequency' => 'Weekly',
                'structure' => [
                    'elements' => [
                        [
                            'id' => 'element_7',
                            'type' => 'heading',
                            'label' => 'Weekly Maintenance Checklist',
                            'position' => ['x' => 50, 'y' => 50],
                            'size' => ['width' => 400, 'height' => 40],
                            'properties' => ['text' => 'Weekly Maintenance Checklist', 'level' => 1]
                        ],
                        [
                            'id' => 'element_8',
                            'type' => 'text',
                            'label' => 'Maintenance Technician',
                            'placeholder' => 'Enter technician name',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter technician name', 'required' => true]
                        ],
                        [
                            'id' => 'element_9',
                            'type' => 'checkbox',
                            'label' => 'Feeders cleaned and inspected',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 180],
                            'size' => ['width' => 250, 'height' => 30],
                            'properties' => ['required' => false]
                        ],
                        [
                            'id' => 'element_10',
                            'type' => 'checkbox',
                            'label' => 'Water systems flushed',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 220],
                            'size' => ['width' => 250, 'height' => 30],
                            'properties' => ['required' => false]
                        ],
                        [
                            'id' => 'element_11',
                            'type' => 'checkbox',
                            'label' => 'Ventilation systems checked',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 260],
                            'size' => ['width' => 250, 'height' => 30],
                            'properties' => ['required' => false]
                        ],
                        [
                            'id' => 'element_12',
                            'type' => 'textarea',
                            'label' => 'Maintenance Notes',
                            'placeholder' => 'Record any issues or repairs needed',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 320],
                            'size' => ['width' => 400, 'height' => 80],
                            'properties' => ['placeholder' => 'Record any issues or repairs needed', 'required' => false, 'rows' => 3]
                        ]
                    ]
                ],
                'created_at' => '2024-01-10 09:00:00',
                'updated_at' => '2024-01-18 16:45:00',
            ],
            [
                'name' => 'Monthly Production Report',
                'description' => 'Monthly egg production, mortality rates, and feed efficiency tracking',
                'frequency' => 'Monthly',
                'structure' => [
                    'elements' => [
                        [
                            'id' => 'element_13',
                            'type' => 'heading',
                            'label' => 'Monthly Production Report',
                            'position' => ['x' => 50, 'y' => 50],
                            'size' => ['width' => 400, 'height' => 40],
                            'properties' => ['text' => 'Monthly Production Report', 'level' => 1]
                        ],
                        [
                            'id' => 'element_14',
                            'type' => 'text',
                            'label' => 'Farm Manager',
                            'placeholder' => 'Enter farm manager name',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter farm manager name', 'required' => true]
                        ],
                        [
                            'id' => 'element_15',
                            'type' => 'number',
                            'label' => 'Total Eggs Produced',
                            'placeholder' => 'Enter total eggs',
                            'required' => true,
                            'position' => ['x' => 280, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter total eggs', 'required' => true, 'min' => 0]
                        ],
                        [
                            'id' => 'element_16',
                            'type' => 'number',
                            'label' => 'Mortality Count',
                            'placeholder' => 'Enter mortality count',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter mortality count', 'required' => true, 'min' => 0]
                        ],
                        [
                            'id' => 'element_17',
                            'type' => 'number',
                            'label' => 'Feed Efficiency Ratio',
                            'placeholder' => 'Enter feed efficiency',
                            'required' => true,
                            'position' => ['x' => 280, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter feed efficiency', 'required' => true, 'min' => 0, 'step' => 0.01]
                        ],
                        [
                            'id' => 'element_18',
                            'type' => 'textarea',
                            'label' => 'Production Analysis',
                            'placeholder' => 'Analyze production trends and issues',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 240],
                            'size' => ['width' => 400, 'height' => 100],
                            'properties' => ['placeholder' => 'Analyze production trends and issues', 'required' => false, 'rows' => 4]
                        ]
                    ]
                ],
                'created_at' => '2024-01-05 08:00:00',
                'updated_at' => '2024-01-25 17:20:00',
            ],
            [
                'name' => 'Biosecurity Protocol',
                'description' => 'Daily biosecurity measures, visitor logs, and disinfection procedures',
                'frequency' => 'Daily',
                'structure' => [
                    'elements' => [
                        [
                            'id' => 'element_19',
                            'type' => 'heading',
                            'label' => 'Biosecurity Protocol',
                            'position' => ['x' => 50, 'y' => 50],
                            'size' => ['width' => 400, 'height' => 40],
                            'properties' => ['text' => 'Biosecurity Protocol', 'level' => 1]
                        ],
                        [
                            'id' => 'element_20',
                            'type' => 'text',
                            'label' => 'Staff Member',
                            'placeholder' => 'Enter staff member name',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter staff member name', 'required' => true]
                        ],
                        [
                            'id' => 'element_21',
                            'type' => 'checkbox',
                            'label' => 'Footbath disinfection completed',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 180],
                            'size' => ['width' => 300, 'height' => 30],
                            'properties' => ['required' => true]
                        ],
                        [
                            'id' => 'element_22',
                            'type' => 'checkbox',
                            'label' => 'Vehicle disinfection completed',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 220],
                            'size' => ['width' => 300, 'height' => 30],
                            'properties' => ['required' => true]
                        ],
                        [
                            'id' => 'element_23',
                            'type' => 'textarea',
                            'label' => 'Visitor Log',
                            'placeholder' => 'Record any visitors and their purpose',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 280],
                            'size' => ['width' => 400, 'height' => 80],
                            'properties' => ['placeholder' => 'Record any visitors and their purpose', 'required' => false, 'rows' => 3]
                        ]
                    ]
                ],
                'created_at' => '2024-01-12 07:30:00',
                'updated_at' => '2024-01-19 15:15:00',
            ],
            [
                'name' => 'Feed Inventory Management',
                'description' => 'Weekly feed stock monitoring, ordering schedules, and cost tracking',
                'frequency' => 'Weekly',
                'structure' => [
                    'elements' => [
                        [
                            'id' => 'element_24',
                            'type' => 'heading',
                            'label' => 'Feed Inventory Management',
                            'position' => ['x' => 50, 'y' => 50],
                            'size' => ['width' => 400, 'height' => 40],
                            'properties' => ['text' => 'Feed Inventory Management', 'level' => 1]
                        ],
                        [
                            'id' => 'element_25',
                            'type' => 'text',
                            'label' => 'Inventory Manager',
                            'placeholder' => 'Enter inventory manager name',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter inventory manager name', 'required' => true]
                        ],
                        [
                            'id' => 'element_26',
                            'type' => 'number',
                            'label' => 'Current Feed Stock (kg)',
                            'placeholder' => 'Enter current stock level',
                            'required' => true,
                            'position' => ['x' => 280, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter current stock level', 'required' => true, 'min' => 0]
                        ],
                        [
                            'id' => 'element_27',
                            'type' => 'number',
                            'label' => 'Feed Cost per kg',
                            'placeholder' => 'Enter cost per kg',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter cost per kg', 'required' => true, 'min' => 0, 'step' => 0.01]
                        ],
                        [
                            'id' => 'element_28',
                            'type' => 'select',
                            'label' => 'Order Status',
                            'required' => true,
                            'options' => ['No Order Needed', 'Order Placed', 'Order Received'],
                            'position' => ['x' => 280, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['options' => ['No Order Needed', 'Order Placed', 'Order Received'], 'required' => true]
                        ],
                        [
                            'id' => 'element_29',
                            'type' => 'textarea',
                            'label' => 'Inventory Notes',
                            'placeholder' => 'Record any inventory issues or notes',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 240],
                            'size' => ['width' => 400, 'height' => 80],
                            'properties' => ['placeholder' => 'Record any inventory issues or notes', 'required' => false, 'rows' => 3]
                        ]
                    ]
                ],
                'created_at' => '2024-01-08 11:00:00',
                'updated_at' => '2024-01-22 13:45:00',
            ],
            [
                'name' => 'Vaccination Schedule',
                'description' => 'Monthly vaccination records, medication logs, and health protocols',
                'frequency' => 'Monthly',
                'structure' => [
                    'elements' => [
                        [
                            'id' => 'element_30',
                            'type' => 'heading',
                            'label' => 'Vaccination Schedule',
                            'position' => ['x' => 50, 'y' => 50],
                            'size' => ['width' => 400, 'height' => 40],
                            'properties' => ['text' => 'Vaccination Schedule', 'level' => 1]
                        ],
                        [
                            'id' => 'element_31',
                            'type' => 'text',
                            'label' => 'Veterinarian',
                            'placeholder' => 'Enter veterinarian name',
                            'required' => true,
                            'position' => ['x' => 50, 'y' => 120],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter veterinarian name', 'required' => true]
                        ],
                        [
                            'id' => 'element_32',
                            'type' => 'date',
                            'label' => 'Vaccination Date',
                            'required' => true,
                            'position' => ['x' => 280, 'y' => 120],
                            'size' => ['width' => 150, 'height' => 40],
                            'properties' => ['required' => true]
                        ],
                        [
                            'id' => 'element_33',
                            'type' => 'select',
                            'label' => 'Vaccine Type',
                            'required' => true,
                            'options' => ['Newcastle Disease', 'Infectious Bronchitis', 'Avian Influenza', 'Marek\'s Disease'],
                            'position' => ['x' => 50, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['options' => ['Newcastle Disease', 'Infectious Bronchitis', 'Avian Influenza', 'Marek\'s Disease'], 'required' => true]
                        ],
                        [
                            'id' => 'element_34',
                            'type' => 'number',
                            'label' => 'Number of Birds Vaccinated',
                            'placeholder' => 'Enter number of birds',
                            'required' => true,
                            'position' => ['x' => 280, 'y' => 180],
                            'size' => ['width' => 200, 'height' => 40],
                            'properties' => ['placeholder' => 'Enter number of birds', 'required' => true, 'min' => 0]
                        ],
                        [
                            'id' => 'element_35',
                            'type' => 'textarea',
                            'label' => 'Vaccination Notes',
                            'placeholder' => 'Record any adverse reactions or notes',
                            'required' => false,
                            'position' => ['x' => 50, 'y' => 240],
                            'size' => ['width' => 400, 'height' => 80],
                            'properties' => ['placeholder' => 'Record any adverse reactions or notes', 'required' => false, 'rows' => 3]
                        ]
                    ]
                ],
                'created_at' => '2024-01-03 09:30:00',
                'updated_at' => '2024-01-17 16:00:00',
            ],
        ];

        foreach ($forms as $form) {
            Form::create($form);
        }
    }
} 