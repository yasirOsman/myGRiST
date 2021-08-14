//this is the JSON containing the structure of the questions and the corresponding questions
export default questions =



	   {
		  "node": [
			 {
				"node": [
				   {
					  "node": [
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "most recent suicide attempt",
										"_code": "suic-most-rec",
										"_value-mg": "((0 1)(2 1)(26 0.5))",
										"_persistent": "soft",
										"_answer-constraint": "((>= [suic >> sui-specific >> suic-past-att >> suic-occur >> suic-patt-att >> suic-first-occ]))",
										"_values": "date-week",
										"_layer": "0",
										"_question": "When was the most recent suicide attempt?",
										"_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine.",
										"_screening": "0"
									 },
									 {
										"node": [
										   {
											  "_label": "first time suicide attempt occurred",
											  "_code": "suic-first-occ",
											  "_value-mg": "((0 0.4) (52 0.4))",
											  "_persistent": "hard",
											  "_values": "date-week",
											  "_question": "When was the first suicide attempt?",
											  "_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases, the duration increases but the effect of recency is much more important on the overall risk judgement."
										   },
										   {
											  "_label": "changing frequency of suicide attempts",
											  "_code": "suic-escalate",
											  "_value-mg": "((DECREASING 0) (SAME 0.5) (INCREASING 1))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_layer": "0",
											  "_question": "How have the suicide attempts been changing in frequency over the last two years?",
											  "_screening": "0"
										   }
										],
										"_label": "more than one suicide attempt",
										"_code": "suic-patt-att",
										"_persistent": "hard",
										"_layer": "0",
										"_filter-q": "Has there been more than one suicide attempt?",
										"_auto-answer": "[NO suic-first-occ suic >> sui-specific >> suic-past-att >> suic-occur >> suic-most-rec][NO suic-how-many \"1\"]",
										"_screening": "0"
									 },
									 {
										"_label": "how many suicide attempts",
										"_code": "suic-how-many",
										"_value-mg": "((0 0)(1 0.5)(3 1))",
										"_persistent": "soft",
										"_values": "integer",
										"_question": "Approximately how many suicide attempts have there been?"
									 }
								  ],
								  "_label": "occurrence of suicide attempts",
								  "_code": "suic-occur"
							   },
							   {
								  "node": [
									 {
										"_label": "suicide note written for one or more previous attempts",
										"_code": "suic-note-prev",
										"_value-mg": "((YES 1) (NO 0))",
										"_persistent": "hard",
										"_values": "nominal",
										"_question": "Was a suicide note written for any previous or current suicide attempts?"
									 },
									 {
										"node": [
										   {
											  "_label": "chance of discovery after suicide attempts",
											  "_code": "suic-discovery",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_question": "Did the person try to hide any suicide attempt, to make sure it was not stopped?",
											  "_help": "Consider whether anyone was given any prior warning about an intended attempt or whether the person made sure he or she will not be found accidentally by someone (eg no people around, not expecting anyone).",
											  "_scale-type": "((left \"no hiding\") (right \"tried very hard to hide attempts\"))"
										   },
										   {
											  "_label": "potential lethality of suicide method",
											  "_code": "suic-lethality",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_layer": "0",
											  "_question": "How lethal was the most serious method used by the person in any of the suicide attempts (i.e. how likely to succeed in killing the person without any intervention)?",
											  "_help": "For example, hanging or jumping off a high building will be maximally lethal but self-stabbing or overdosing, less lethal depending exactly how it was done (eg number of pills, type of pills).",
											  "_scale-type": "((left \"harmless method\") (right \"method extremely likely to kill\"))",
											  "_screening": "0"
										   }
										],
										"_label": "seriousness of suicide methods",
										"_code": "suic-ser-method"
									 }
								  ],
								  "_label": "preparation and seriousness of suicide attempts",
								  "_code": "suic-prep-serious-at"
							   },
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "How much did the person want to succeed with the suicide attempts",
											  "_code": "suic-ser-succd",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_layer": "0",
											  "_question": "Do you believe the person wanted the suicide attempts to succeed at the time?",
											  "_help": "Did he or she immediately regret any of the attempts or wish they had succeeded? Was the person surprised to be alive afterwards?",
											  "_scale-type": "((left \"no desire to succeed\") (right \"really wanted to succeed\"))",
											  "_screening": "0"
										   },
										   {
											  "_label": "regret about trying to complete suicide",
											  "_code": "suic-regret",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_layer": "0",
											  "_question": "How much does the person fail to show any regret or remorse over having tried to complete suicide in the past?",
											  "_help": "This applies to the person\'s current feelings and includes embarrassment or shame, regret that suicide was attempted, or wishing that the suicide was successful.",
											  "_scale-type": "((left \"wish they\'d never tried\") (right \"no regrets\"))",
											  "_screening": "0"
										   }
										],
										"_label": "thoughts/feelings related to previous suicide attempts",
										"_code": "suic-thght-prev"
									 },
									 {
										"_label": "insight into lethality of previous suicide attempts",
										"_code": "suic-leth-insght",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person lack awareness about how dangerous the suicide attempts were?",
										"_scale-type": "((left \"aware of the danger\") (right \"completely unaware of the danger\"))"
									 }
								  ],
								  "_label": "person\'s current perspective on suicide attempts",
								  "_code": "suic-person-per"
							   }
							],
							"_label": "past and current suicide attempts",
							"_code": "suic-past-att",
							"_persistent": "hard",
							"_layer": "0",
							"_filter-q": "Has the person ever made a suicide attempt? If yes, the questions about them should be answered with reference to the attempts in general rather than any specific one, unless otherwise stated.",
							"_screening": "0"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "realism of suicide plan",
											  "_code": "suic-plan-real",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Can the person easily carry out the suicide plan (consider realism of plan and access to means of putting it into action)?",
											  "_help": "Consider the person\'s occupation (eg doctor, vet, farmer), access to equipment (eg weapon, bleach, rope, gun, drugs), availability of suitable locations and contexts (eg being alone, high cliffs/buildings nearby), whether assistance has been obtained by anyone else, and collusion such as a suicide pact.",
											  "_scale-type": "((left \"no chance of carrying out plan\") (right \"extremely easy to carry out plan\"))"
										   },
										   {
											  "_label": "physical steps taken to implement suicide plan",
											  "_code": "suic-steps-takn",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Has the person taken steps towards carrying out the suicide plan?",
											  "_help": "For example: researching the means of suicide, obtaining the objects for carrying it out (hoarding drugs, getting hosepipe for carbon monoxide poisoning, buying rope or cord), rehearsing the planned suicide.",
											  "_scale-type": "((left \"no steps at all\") (right \"preparations complete\"))"
										   },
										   {
											  "_label": "potential lethality of prospective suicide method",
											  "_code": "suic-prosp-leth",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "How likely is the chosen method to succeed?",
											  "_help": "For example, hanging or jumping off a high building will be maximally lethal but self-stabbing or overdosing, less lethal depending exactly how it was done (eg number of pills, type of pills). Consider also the likelihood of someone intervening to prevent success.",
											  "_scale-type": "((left \"no chance of succeeding\") (right \"extremely likely to succeed\"))"
										   }
										],
										"_label": "plans and methods for completing suicide",
										"_code": "suic-plans",
										"_filter-q": "Does the person have any plans for making a future suicide attempt?",
										"_help": "Answer yes if people have said anything about how they might end their lives."
									 },
									 {
										"_label": "informed someone about intention to complete suicide",
										"_code": "suic-int-inform",
										"_value-mg": "((YES 1) (NO 0))",
										"_values": "nominal",
										"_question": "Has the person told anyone about an intention to complete suicide?",
										"_help": "This includes making threats or talking about intentions to complete suicide."
									 },
									 {
										"_label": "end-of-life preparations for intended suicide act",
										"_code": "suic-eol-prep",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Has the person made unexpected end-of-life preparations that cause you concern about suicide risk (eg written a will, sorted finances, put house in order, written suicide note)?",
										"_scale-type": "((left \"no preparations\") (right \"finished all preparations\"))"
									 },
									 {
										"_label": "self-harm behaviour indicative of suicide",
										"_code": "suic-s-h-behv",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_layer": "0",
										"_question": "Does the person have a pattern of self-harming that indicates suicidal intention?",
										"_help": "This includes self harming behaviour that is failing to provide any relief to the person\'s situation, no reassurance about future behaviour, a detrimental change in the pattern of attempts (eg escalating frequency of attempts, methods involved), and whether the method used is so dangerous as to be likely to result in death (eg lethal laceration, excessively reckless driving).",
										"_scale-type": "(left \"no self-harming\") (right \"self-harming strongly indicates suicide intention\")",
										"_screening": "0"
									 },
									 {
										"_label": "spiritual/religious values/beliefs affecting suicide risk",
										"_code": "suic-rel-belief",
										"_value-mg": "((STRONGLY-PROTECT 0) (PROTECT 0) (NO-EFFECT 0) (INCREASE 0.5) (STRONGLY-INCREASE 1))",
										"_persistent": "soft",
										"_values": "nominal",
										"_question": "What effect do the person\'s spiritual/religious values, beliefs, or attitudes to dying have on risk of suicide?"
									 }
								  ],
								  "_label": "current intention to complete suicide",
								  "_code": "suic-curr-int",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about the person\'s current intention to complete suicide?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "potential triggers of suicide",
										"_code": "suic-pot-trig",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Is the person exposed to feelings or circumstances that may trigger a suicide attempt?",
										"_help": "Consider relevant emotions such as desperation, anguish, agitation, anxiety, frustration, compulsion, feeling rejected; painful anniversaries that might trigger these emotions; any external triggers of previous suicide attempts; mental health problems; relationship triggers (eg argument, row); changes to relationships (eg divorce, break up of relationship, loss of or change of carer ); alcohol misuse; media influence (eg copycat behaviour); their mental state (eg any dilemmas that can\'t be resolved), or their current setting (eg police station, custody); and any change in environment such as going into care or being released from care.",
										"_scale-type": "((left \"no such feelings/circumstances\") (right \"surrounded by such feelings/circumstances\"))",
										"_screening": "0"
									 },
									 {
										"_label": "potential triggers match those that previously caused suicide attempts",
										"_code": "suic-p-trig-mtch",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Do the person\'s current feelings or circumstances match those that are known to have triggered any previous suicide attempts?",
										"_scale-type": "((left \"no previous attempts\") (right \"current feelings/circumstances identical to those in a previous attempt\"))",
										"_screening": "0"
									 },
									 {
										"_label": "family history of suicide",
										"_code": "suic-fam-hist",
										"_value-mg": "((YES 1) (NO 0))",
										"_persistent": "hard",
										"_values": "nominal",
										"_question": "Has there been any history of suicide attempts in the person\'s family?"
									 }
								  ],
								  "_label": "potential triggers for prospective suicide",
								  "_code": "suic-int-p-trig",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about anything that could trigger suicide attempts?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "ability to control suicidal ideation",
										"_code": "suic-id-control",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Does the person lack ability to control suicidal thoughts or fantasies?",
										"_scale-type": "((left \"easily controlled thoughts\") (right \"no control over thoughts\"))",
										"_screening": "0"
									 },
									 {
										"_label": "content of suicidal ideation indicates high risk",
										"_code": "suic-id-hi-risk",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Does the content of the suicidal thoughts or fantasies make it more likely the person will attempt suicide?",
										"_help": "What are the thoughts or fantasies about and how does the content raise alarm bells about suicide risk?",
										"_scale-type": "((left \"no change to the likelihood\") (right \"greatly increased likelihood\"))",
										"_screening": "0"
									 },
									 {
										"_label": "frequency of suicidal ideation",
										"_code": "suic-id-freq",
										"_value-mg": "((DAILY 1) (WEEKLY 0.5) (MONTHLY 0.2) (LESS-THAN-MONTHLY 0))",
										"_values": "nominal",
										"_question": "How often do the suicidal thoughts or fantasies occur?"
									 },
									 {
										"_label": "strength, intensity, intrusiveness, and persistence of suicidal ideation",
										"_code": "suic-id-strngth",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "How persistent, intrusive, or intense are the suicidal thoughts or fantasies?",
										"_help": "Think about how much the suicidal thoughts overwhelm any other thoughts and how real they seem.",
										"_scale-type": "((left \"thoughts hardly noticed\") (right \"can\'t think about anything else\"))",
										"_screening": "0"
									 }
								  ],
								  "_label": "suicidal ideation",
								  "_code": "suic-ideation",
								  "_layer": "0",
								  "_filter-q": "Is the person having suicidal thoughts or fantasies?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "self-harming injuries",
										"_code": "gen-sh-cuts",
										"_generic": "sh >> sh-specific >> sh-past-curr-ep >> sh-occ-of-ep >> gen-sh-cuts"
									 },
									 {
										"_label": "appearance indicators of self neglect",
										"_code": "sn-appearnce",
										"_generic": "sn >> sn-appearnce"
									 }
								  ],
								  "_label": "appearance indicators of suicide",
								  "_code": "app-suic"
							   }
							],
							"_label": "current suicidal situation and behaviour",
							"_code": "suic-curr-sit-behav"
						 }
					  ],
					  "_label": "suicide specific questions",
					  "_code": "sui-specific",
					  "_layer": "0",
					  "_question": "Do you have reason to be concerned about the person\'s risk of suicide?",
					  "_screening": "0",
					  "_screening-only": "true"
				   },
				   {
					  "_label": "direct risk children",
					  "_code": "gen-direct",
					  "_generic": "generic >> gen-direct"
				   }
				],
				"_label": "suicide",
				"_code": "suic",
				"__FIXME": "TODO - replace mg-deviation-threshold attrib with a real version",
				"_value-mg": "((0 0) (10 1))",
				"_values": "scale",
				"_mg-deviation-threshold": "0.3",
				"_question": "In your judgement, what is the risk that the person will attempt suicide?",
				"_help": "Consider the likelihood in the context of the person\'s circumstances after the assessment if no further action is taken.",
				"_scale-type": "((left \"no risk\") (right \"maximum risk\"))"
			 },
			 {
				"node": [
				   {
					  "node": [
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "self-harming injuries",
										"_code": "gen-sh-cuts",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person display evidence of recent self-harming injuries?",
										"_help": "Consider cuts, burns, ligature marks, etc.",
										"_scale-type": "((left \"no self-harming injuries\") (right \"covered in self-harming injuries\"))"
									 },
									 {
										"_label": "most recent self-harm episode",
										"_code": "sh-most-rec-ep",
										"_value-mg": "((0 1)(14 1)(60 0.5)(365 0))",
										"_persistent": "soft",
										"_answer-constraint": "((>= [sh >> sh-specific >> sh-past-curr-ep >> sh-occ-of-ep >> sh-patt-of-eps >> sh-first-time-ep]))",
										"_values": "date-day",
										"_question": "When was the most recent self-harm episode?",
										"_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine.",
										"_screening": "0"
									 },
									 {
										"node": [
										   {
											  "_label": "first time self-harm episode occurred",
											  "_code": "sh-first-time-ep",
											  "_value-mg": "((0 0.4) (52 0.4))",
											  "_persistent": "hard",
											  "_values": "date-week",
											  "_question": "When was the first self-harm episode?",
											  "_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases the duration increases but the effect of recency is much more important on the overall risk judgement."
										   },
										   {
											  "_label": "frequency of self-harming episodes",
											  "_code": "sh-freq-eps",
											  "_value-mg": "((DAILY 1) (WEEKLY 0.75) (MONTHLY 0.3) (LESS-THAN-MONTHLY 0))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_question": "How often do the episodes of self-harm occur?"
										   },
										   {
											  "_label": "change in self-harm frequency",
											  "_code": "sh-incrse-eps",
											  "_value-mg": "((DECREASING 0) (SAME 0.5) (INCREASING 1))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_layer": "0",
											  "_question": "Have the self-harm episodes changed in frequency over the last year?",
											  "_screening": "0"
										   }
										],
										"_label": "multiple self-harm episodes",
										"_code": "sh-patt-of-eps",
										"_persistent": "hard",
										"_filter-q": "Has there been more than one self-harm episode?",
										"_auto-answer": "[NO sh-first-time-ep sh >> sh-specific >> sh-past-curr-ep >> sh-occ-of-ep >> sh-most-rec-ep]",
										"_screening": "0"
									 }
								  ],
								  "_label": "occurrence of self-harm episodes",
								  "_code": "sh-occ-of-ep"
							   },
							   {
								  "node": [
									 {
										"_label": "chance of being helped after self-harming",
										"_code": "sh-hlp-after",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person try to hide any self-harming?",
										"_help": "Consider whether anyone was given any prior warning about an intended attempt or whether the person made sure he or she will not be found accidentally by someone (eg no people around, not expecting anyone).",
										"_scale-type": "((left \"no hiding\") (right \" tries very hard to hide self-harming\"))"
									 },
									 {
										"_label": "potential lethality of self-harm method",
										"_code": "sh-lethality-mth",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "In general, how likely is it that the chosen self-harm methods could lead to death?",
										"_help": "For example, hanging or jumping off a high building will be maximally lethal but self-stabbing or overdosing, less lethal depending exactly how it was done (eg number of pills, type of pills, degree of cuts and their location).",
										"_scale-type": "((left \"extremely unlikely\") (right \"extremely likely\"))",
										"_screening": "0"
									 },
									 {
										"_label": "change in self-harming method",
										"_code": "sh-change-mth",
										"_value-mg": "((no-change 0) (recent-change 1))",
										"_values": "nominal",
										"_question": "Have the self-harming methods suddenly changed?",
										"_help": "Think about whether the normal method of self-harming has changed to something different in the last few days. Unfamiliarity with the method can have unpredictable or dangerous outcomes."
									 }
								  ],
								  "_label": "seriousness of self-harm episodes",
								  "_code": "sh-seriousns-eps"
							   },
							   {
								  "_label": "self-harming not a cry for help",
								  "_code": "sh-for-hlp-diff",
								  "_value-mg": "((0 0) (10 1))",
								  "_persistent": "soft",
								  "_values": "scale",
								  "_question": "How much are the self-harming episodes more than a cry for help (driven by the underlying problem rather than trying to get help with it)",
								  "_help": "Think about how the self-harming is being used. Is it to show others the person needs help or is it a way of coping with their problems alone?",
								  "_scale-type": "((left \"purely to get help\") (right \"nothing to do with getting help\"))"
							   },
							   {
								  "_label": "self-harm helping to cope with difficulties",
								  "_code": "sh-hlp-cope-diff",
								  "_value-mg": "((yes 0) (somewhat 0.5) (no 1))",
								  "_persistent": "soft",
								  "_values": "nominal",
								  "_question": "Did the self-harm episodes help the person cope with difficulties?"
							   }
							],
							"_label": "past and current episodes of self-harm",
							"_code": "sh-past-curr-ep",
							"_persistent": "hard",
							"_layer": "0",
							"_filter-q": "Has the person ever engaged in self-harming behaviour? If yes, the questions about them should be answered with reference to the general episodes rather than any specific one, unless otherwise stated.",
							"_screening": "0"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "potential triggers of self-harm",
										"_code": "sh-pot-triggs",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Is the person exposed to feelings or circumstances that may trigger self-harming?",
										"_help": "Consider relevant emotions such as desperation, anguish, agitation, anxiety, frustration, compulsion, feeling rejected, external triggers of previous suicide attempts, mental health problems, relationship triggers (eg argument, row), changes to relationships (eg divorce, break up of relationship, loss of or change of carer ), alcohol misuse, media influence (eg copycat behaviour), their mental state (eg any dilemmas that can\'t be resolved), or their current setting (eg police station, custody), change in environment such as going into care or being released from care.",
										"_scale-type": "((left \"no such feelings/circumstances\") (right \"surrounded by such feelings/circumstances\"))",
										"_screening": "0"
									 },
									 {
										"_label": "potential triggers match those previously triggering self-harm",
										"_code": "sh-pot-trigs-mtch",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Do the person\'s current feelings or circumstances match those that are known to have triggered any previous episodes of self harm?",
										"_scale-type": "((left \"no previous self-harming\") (right \"current feelings/circumstances identical to those in previous self-harming\"))",
										"_screening": "0"
									 },
									 {
										"_label": "family history of self-harm",
										"_code": "sh-family-hist",
										"_value-mg": "((YES 1) (NO 0))",
										"_persistent": "hard",
										"_values": "nominal",
										"_question": "Has there been any history of self-harm in the person\'s family?"
									 }
								  ],
								  "_label": "potential triggers for prospective self-harm",
								  "_code": "sh-pot-triggs-p",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about anything that could trigger self-harm?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "frequency of self-harm ideation",
										"_code": "sh-freq-ideatn",
										"_value-mg": "((DAILY 1) (WEEKLY 0.5) (MONTHLY 0.2) (LESS-THAN-MONTHLY 0))",
										"_values": "nominal",
										"_question": "How often do the self-harming thoughts or fantasies occur?"
									 },
									 {
										"_label": "strength, intensity, intrusiveness, and persistence of self-harm ideation",
										"_code": "sh-strength",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "How persistent, intrusive, and intense are the self-harming thoughts?",
										"_help": "Think about how much the self-harming thoughts overwhelm any other thoughts and how real they seem.",
										"_scale-type": "((left \"thoughts hardly noticed\") (right \"can\'t think about anything else\"))",
										"_screening": "0"
									 }
								  ],
								  "_label": "self-harm ideation",
								  "_code": "sh-ideation",
								  "_layer": "0",
								  "_filter-q": "Is the person having self-harming thoughts or fantasies?",
								  "_screening": "0"
							   }
							],
							"_label": "current self-harm situation and context",
							"_code": "self-harm-curr-sit-behav"
						 }
					  ],
					  "_label": "self-harm specific questions",
					  "_code": "sh-specific",
					  "_layer": "0",
					  "_question": "Do you have reason to be concerned about the person\'s risk of self-harming?",
					  "_screening": "0",
					  "_screening-only": "true"
				   },
				   {
					  "_label": "direct risk children",
					  "_code": "gen-direct",
					  "_generic": "generic >> gen-direct"
				   }
				],
				"_label": "self-harm",
				"_code": "sh",
				"_value-mg": "((0 0) (10 1))",
				"_values": "scale",
				"_mg-deviation-threshold": "0.3",
				"_question": "In your judgement, what is the risk that the person will self-harm?",
				"_help": "Consider the likelihood in the context of the person\'s circumstances after the assessment if no further action is taken.",
				"_scale-type": "((left \"no risk\") (right \"maximum risk\"))"
			 },
			 {
				"node": [
				   {
					  "node": [
						 {
							"node": [
							   {
								  "node": [
									 {
										"node": [
										   {
											  "node": [
												 {
													"_label": "seriousness of violent assault/physical abuse",
													"_code": "hto-violent",
													"_value-mg": "((0 0) (10 1))",
													"_persistent": "soft",
													"_values": "scale",
													"_question": "How serious was the most severe physical assault or abuse?",
													"_scale-type": "((left \"minor\") (right \"extremely serious\"))",
													"_screening": "0"
												 },
												 {
													"_label": "most recent violent harm to others",
													"_code": "hto-recent-violent-eps",
													"_value-mg": "((0 1)(2 1)(52 0.5))",
													"_persistent": "soft",
													"_answer-constraint": "((>= [hto >> hto-specific >> hto-past-curr-ep >> hto-type >> hto-phys-sex >> hto-any-violent >> hto-first-time-violent-ep]))",
													"_values": "date-week",
													"_question": "When was the most recent episode of assault/physical abuse?",
													"_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine.",
													"_screening": "0"
												 },
												 {
													"_label": "frequency of physical assaults",
													"_code": "hto-violent-prev-freq",
													"_persistent": "soft",
													"_value-mg": "((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))",
													"_values": "nominal",
													"_question": "How frequent are the physical assaults?",
													"_screening": "0"
												 },
												 {
													"_label": "first time physical harm to others occurred",
													"_code": "hto-first-time-violent-ep",
													"_value-mg": "((0 0.4) (12 0.4))",
													"_persistent": "hard",
													"_values": "date-month",
													"_question": "When was the first episode of assault/physical abuse?",
													"_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases the duration increases but the effect of recency is much more important on the overall risk judgement."
												 }
											  ],
											  "_label": "any physical assaults",
											  "_code": "hto-any-violent",
											  "_persistent": "hard",
											  "_layer": "0",
											  "_filter-q": "Were any of the episodes physical assaults/abuse?",
											  "_screening": "0"
										   },
										   {
											  "node": [
												 {
													"_label": "type of non-consensual sexual assault",
													"_code": "hto-sex-asslt",
													"_value-mg": "((INDECENT-EXPOSURE 0.2)(FONDLING 0.4) (ORAL-RAPE 0.8) (ANAL-RAPE 1) (VAGINAL-RAPE 1))",
													"_persistent": "soft",
													"_values": "nominal",
													"_question": "Select the most serious form of sexual assault by the person?",
													"_help": "This includes forcible fondling, sexual assault with an object, forcible oral or anal intercourse, and forcible rape.",
													"_screening": "0"
												 },
												 {
													"_label": "most recent episode of sexual assault",
													"_code": "hto-recent-sexual-eps",
													"_value-mg": "((0 1)(2 1)(52 0.5))",
													"_persistent": "soft",
													"_answer-constraint": "((>= [hto >> hto-specific >> hto-past-curr-ep >> hto-type >> hto-phys-sex >> hto-any-sex-asslt >> hto-first-time-sexual-ep]))",
													"_values": "date-week",
													"_question": "When was the most recent episode of sexual assault?",
													"_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine.",
													"_screening": "0"
												 },
												 {
													"_label": "frequency of sexual assaults",
													"_code": "hto-sexual-prev-freq",
													"_persistent": "soft",
													"_value-mg": "((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))",
													"_values": "nominal",
													"_question": "How frequent are the episodes of sexual assault?",
													"_screening": "0"
												 },
												 {
													"_label": "first time sexual assault occurred",
													"_code": "hto-first-time-sexual-ep",
													"_value-mg": "((0 0.4) (12 0.4))",
													"_persistent": "hard",
													"_values": "date-month",
													"_question": "When was the first episode of sexual assault?",
													"_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases the duration increases but the effect of recency is much more important on the overall risk judgement."
												 }
											  ],
											  "_label": "any non-consensual sexual assault",
											  "_code": "hto-any-sex-asslt",
											  "_persistent": "hard",
											  "_filter-q": "Were any of the previous assaults rape or some other form of sexual abuse?",
											  "_screening": "0"
										   },
										   {
											  "_label": "history of using weapons",
											  "_code": "hto-weapons-hist",
											  "_value-mg": "((YES 1) (NO 0))",
											  "_persistent": "hard",
											  "_values": "nominal",
											  "_question": "Did any previous episodes of harm to others involve weapons (eg guns, knives)?",
											  "_screening": "0"
										   }
										],
										"_label": "physical or sexual assaults",
										"_code": "hto-phys-sex",
										"_persistent": "hard",
										"_filter-q": "Has the person ever carried out any physical or sexual assaults?",
										"_screening": "0"
									 },
									 {
										"node": [
										   {
											  "_label": "seriousness of emotional harm to others",
											  "_code": "hto-emotional-ep",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_question": "How serious was the emotional abuse?",
											  "_scale-type": "((left \"minor\") (right \"extremely serious\"))",
											  "_screening": "0"
										   },
										   {
											  "_label": "most recent episode of emotional abuse",
											  "_code": "hto-recent-emotional-eps",
											  "_value-mg": "((0 1)(2 1)(52 0.5))",
											  "_persistent": "soft",
											  "_answer-constraint": "((>= [hto >> hto-specific >> hto-past-curr-ep >> hto-type >> hto-emotional-eps >> hto-first-time-emotional-ep]))",
											  "_values": "date-week",
											  "_question": "When was the most recent episode of emotional abuse?",
											  "_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine.",
											  "_screening": "0"
										   },
										   {
											  "_label": "frequency of emotional abuse",
											  "_code": "hto-emotional-prev-freq",
											  "_persistent": "soft",
											  "_value-mg": "((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))",
											  "_values": "nominal",
											  "_question": "How frequent are the episodes of emotional abuse?",
											  "_screening": "0"
										   },
										   {
											  "_label": "first episode of emotional abuse",
											  "_code": "hto-first-time-emotional-ep",
											  "_value-mg": "((0 0.4) (12 0.4))",
											  "_persistent": "hard",
											  "_values": "date-month",
											  "_question": "When was the first episode of emotional abuse?",
											  "_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases the duration increases but the effect of recency is much more important on the overall risk judgement."
										   }
										],
										"_label": "emotional episodes of harm to others",
										"_code": "hto-emotional-eps",
										"_persistent": "hard",
										"_filter-q": "Has the person ever emotionally abused other people (including racial abuse)?",
										"_help": "Consider verbal abuse, insults, name calling, emotional bullying, constant criticism, humiliation.",
										"_screening": "0"
									 },
									 {
										"node": [
										   {
											  "_label": "deliberate damage to property",
											  "_code": "hto-dest-prprty",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_question": "How serious was the damage to property?",
											  "_scale-type": "((left \"minor\") (right \"extremely serious\"))",
											  "_screening": "0"
										   },
										   {
											  "_label": "most recent deliberate damage to property",
											  "_code": "hto-recent-destructive-eps",
											  "_value-mg": "((0 1) (2 1)(52 0.5))",
											  "_persistent": "soft",
											  "_answer-constraint": "((>= [hto >> hto-specific >> hto-past-curr-ep >> hto-type >> hto-any-dest-prprty >> hto-first-time-destructive-ep]))",
											  "_values": "date-week",
											  "_question": "When was the most recent deliberate damage to property?",
											  "_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine.",
											  "_screening": "0"
										   },
										   {
											  "_label": "frequency of destructive episodes",
											  "_code": "hto-destructive-prev-freq",
											  "_persistent": "soft",
											  "_value-mg": "((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))",
											  "_values": "nominal",
											  "_question": "How frequent are the episodes of damage to property?",
											  "_screening": "0"
										   },
										   {
											  "_label": "first time deliberate damage to property occurred?",
											  "_code": "hto-first-time-destructive-ep",
											  "_value-mg": "((0 0.4) (12 0.4))",
											  "_persistent": "hard",
											  "_values": "date-month",
											  "_question": "When was the first deliberate damage to property?",
											  "_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases the duration increases but the effect of recency is much more important on the overall risk judgement."
										   }
										],
										"_label": "any deliberate damage to property",
										"_code": "hto-any-dest-prprty",
										"_persistent": "hard",
										"_filter-q": "Has the person ever engaged in deliberate damage to property (excluding fire setting)?",
										"_screening": "0"
									 },
									 {
										"node": [
										   {
											  "_label": "fire-setting",
											  "_code": "hto-fire-setting",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_question": "How serious were the acts of fire setting?",
											  "_scale-type": "((left \"minor\") (right \"extremely serious\"))",
											  "_screening": "0"
										   },
										   {
											  "_label": "most recent episode of fire setting",
											  "_code": "hto-recent-fire-setting-eps",
											  "_value-mg": "((0 1)(2 1) (52 0.5))",
											  "_persistent": "soft",
											  "_answer-constraint": "((>= [hto >> hto-specific >> hto-past-curr-ep >> hto-type >> hto-any-fire-setting >> hto-first-time-fire-setting-ep]))",
											  "_values": "date-week",
											  "_question": "When was the most recent episode of fire setting?",
											  "_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine.",
											  "_screening": "0"
										   },
										   {
											  "_label": "frequency of fire-setting episodes",
											  "_code": "hto-fire-setting-prev-freq",
											  "_persistent": "soft",
											  "_value-mg": "((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))",
											  "_values": "nominal",
											  "_question": "How frequent are the fire-setting episodes?",
											  "_screening": "0"
										   },
										   {
											  "_label": "first time fire-setting episode occurred",
											  "_code": "hto-first-time-fire-setting-ep",
											  "_value-mg": "((0 0.4) (12 0.4))",
											  "_persistent": "hard",
											  "_values": "date-month",
											  "_question": "When was the first episode of fire setting?",
											  "_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases the duration increases but the effect of recency is much more important on the overall risk judgement."
										   }
										],
										"_label": "any fire-setting",
										"_code": "hto-any-fire-setting",
										"_persistent": "hard",
										"_filter-q": "Has the person ever engaged in fire setting behaviour?",
										"_screening": "0"
									 },
									 {
										"node": [
										   {
											  "_label": "abuse of animals",
											  "_code": "hto-to-anmls",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_question": "How serious was the animal abuse?",
											  "_help": "Think about how the person harmed the animal(s), and the seriousness of the injuries inflicted.",
											  "_scale-type": "((left \"minor\") (right \"extremely serious\"))"
										   },
										   {
											  "_label": "most recent episode of animal abuse",
											  "_code": "hto-recent-animal-eps",
											  "_value-mg": "((0 1)(2 1) (52 0.5))",
											  "_persistent": "soft",
											  "_answer-constraint": "((>= [hto >> hto-specific >> hto-past-curr-ep >> hto-type >> hto-any-to-anmls >> hto-first-time-animal-ep]))",
											  "_values": "date-week",
											  "_question": "When was the most recent episode of animal abuse?",
											  "_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine."
										   },
										   {
											  "_label": "frequency of animal abuse",
											  "_code": "hto-animal-prev-freq",
											  "_persistent": "soft",
											  "_value-mg": "((ONLY-ONCE 0.2)(LESS-THAN-EVERY-YEAR 0.4) (ONCE-EVERY-YEAR 0.6)(SEVERAL-TIMES-YEAR 0.7)(MONTHLY 0.8)(WEEKLY 0.9)(DAILY 1))",
											  "_values": "nominal",
											  "_question": "How frequent are the episodes of animal abuse?",
											  "_screening": "0"
										   },
										   {
											  "_label": "first time animal abuse occurred",
											  "_code": "hto-first-time-animal-ep",
											  "_value-mg": "((0 0.4) (12 0.4))",
											  "_persistent": "hard",
											  "_values": "date-month",
											  "_question": "When was the first episode of animal abuse?",
											  "_help": "This is measuring the duration of the risk behaviour in the person\'s life as opposed to recency. If recency decreases the duration increases but the effect of recency is much more important on the overall risk judgement."
										   }
										],
										"_label": "any abuse of animals",
										"_code": "hto-any-to-anmls",
										"_persistent": "hard",
										"_filter-q": "Has the person ever abused animals?",
										"_screening": "0"
									 }
								  ],
								  "_label": "type and seriousness of harm or damage episodes",
								  "_code": "hto-type"
							   },
							   {
								  "_label": "targets of harm to others",
								  "_code": "hto-targets",
								  "_value-mg": "((CARERS-FAMILY 1)(SHARED-ACCOM-NEIGHBOURS 1) (FRIENDS-COLLEAGUES 1) (HEALTH-WORKERS 1) (AUTHORITY-FIGS 1) (ETHNIC 1))",
								  "_persistent": "soft",
								  "_multiple-tick": "((CARERS-FAMILY \"Has anyone been harmed within the domestic setting?\" [carers or family]) (SHARED-ACCOM-NEIGHBOURS \"Have any neighbours or people sharing your living space been harmed?\" [neighbours or people sharing living space])(FRIENDS-COLLEAGUES \"Have any friends or colleagues been harmed?\" [friends or colleagues]) (HEALTH-WORKERS \"Have any health workers been harmed?\" [health workers]) (AUTHORITY-FIGS \"Have any authority figures been harmed?\" [authority figures]) (ETHNIC \"Has anyone from a different ethnic background been harmed?\" [those from a different ethnic background]))",
								  "_values": "nominal",
								  "_layer": "0",
								  "_question": "Are there any particular groups of people, rather than complete strangers, that the person is known to have targeted for harm?  If yes, select all those that apply.",
								  "_help": "Select the boxes for all those that apply.",
								  "_screening": "0"
							   },
							   {
								  "_label": "person\'s current perspective on harm or damage episodes",
								  "_code": "hto-curr-persp-ep",
								  "_value-mg": "((0 0) (10 1))",
								  "_persistent": "soft",
								  "_values": "scale",
								  "_question": "Does the person believe there was nothing wrong with causing harm or damage?",
								  "_scale-type": "((left \"definitely wrong\") (right \"nothing wrong\"))",
								  "_screening": "0"
							   }
							],
							"_label": "past and current episodes of harm or damage",
							"_code": "hto-past-curr-ep",
							"_persistent": "hard",
							"_layer": "0",
							"_filter-q": "Has the person ever engaged in episodes of harm to people/animals or damage to property (fire setting, vandalism, etc)? If yes, the questions about them should be answered with reference to the attempts in general rather than any specific one, unless otherwise stated.",
							"_screening": "0"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "means and ability to carry out harm or damage plan",
										"_code": "hto-means-plan",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person have the means and know-how to carry out the plan for harm or damage?",
										"_help": "Consider how easy it is for the person to access weapons or any other equipment required for the plan. Does the equipment require specialist skills to use and has the person got them?",
										"_scale-type": "((left \"no means or know-how\") (right \"complete means and know-how\"))"
									 },
									 {
										"_label": "physical steps taken to implement harm or damage plan",
										"_code": "hto-steps-plan",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Has the person taken steps towards implementing the plan to harm or damage (eg made threats, monitored the victim)?",
										"_scale-type": "((left \"no steps\") (right \"preparations complete\"))"
									 },
									 {
										"node": [
										   {
											  "_label": "planning to harm a particular person",
											  "_code": "hto-targets-id",
											  "_value-mg": "((YES 1) (NO 0))",
											  "_values": "nominal",
											  "_question": "Has the person got any particular victims (specific individuals) in mind for harming?"
										   }
										],
										"_label": "intention to harm people",
										"_code": "hto-intent-peop",
										"_filter-q": "Are the person\'s intentions directed towards people?",
										"_help": "This question is finding out whether people are included in the intentions to cause harm or damage rather than just property on its own.",
										"_screening": "0"
									 },
									 {
										"_label": "appearance indicators of harm or damage",
										"_code": "app-harm-dam",
										"_value-mg": "((0 0)(10 1))",
										"_values": "scale",
										"_question": "Does the person\'s appearance (not body language or behaviour) cause you concern about risk of harm or damage (eg sweating, blood, state of clothes)?",
										"_scale-type": "((left \"no concern\") (right \"extremely concerned\"))"
									 },
									 {
										"_label": "spiritual/religious values/beliefs affecting harm or damage risk",
										"_code": "hto-religious",
										"_value-mg": "((STRONGLY-REDUCE 0) (REDUCE 0) (NO-EFFECT 0) (INCREASE 0.5) (STRONGLY-INCREASE 1))",
										"_persistent": "soft",
										"_values": "nominal",
										"_question": "What effect do the person\'s spiritual/religious values or beliefs have on the risk of harm or damage?"
									 }
								  ],
								  "_label": "intention for harm or damage",
								  "_code": "hto-intention",
								  "_layer": "0",
								  "_question": "Do you believe the person has an intention/plan to cause harm or damage?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "potential triggers of harm or damage",
										"_code": "hto-pot-trig",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Is the person exposed to feelings or circumstances that could trigger episodes of harm or damage?",
										"_scale-type": "((left \"no such feelings/circumstances\") (right \"surrounded by such feelings/circumstances\"))",
										"_screening": "0"
									 },
									 {
										"_label": "potential triggers match those previously triggering harm or damage",
										"_code": "hto-pot-trig-mtch",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "Do the person\'s current feelings or circumstances match those that are known to have triggered any previous harm or damage?",
										"_scale-type": "((left \"no previous harm or damage\") (right \"current feelings/circumstances identical to those in previous harm or damage\"))",
										"_screening": "0"
									 },
									 {
										"_label": "interest in violent pursuits",
										"_code": "gen-violent-purs",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person have an interest in pursuits related to violence (eg weapons, violent videos or computer games)?",
										"_scale-type": "((left \"no interest\") (right \"extremely interested\"))"
									 },
									 {
										"_label": "family history relating to harm or damage",
										"_code": "hto-fam-hist",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Is there a history of violence, abuse, or aggression in the person\'s family?",
										"_help": "Consider criminal history and mental health problems in the person\'s family.",
										"_scale-type": "((left \"no history\") (right \"long and severe history\"))"
									 }
								  ],
								  "_label": "potential triggers for prospective harm or damage",
								  "_code": "pot-trig-hto",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about anything that could trigger harm or damage?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "high risk content of harm or damage ideation",
										"_code": "hto-hi-rsk-ideatn",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the content of the person\'s thoughts or fantasies about harm or damage make it more likely he or she will do it?",
										"_help": "What are the thoughts or fantasies about and how does the content raise alarm bells about harming people/animals or damaging property?  Consider thoughts or fantasies about weapons, destructions, harming people (eg women) or animals.",
										"_scale-type": "((left \"no change to the likelihood\") (right \"greatly increased likelihood\"))",
										"_screening": "0"
									 },
									 {
										"_label": "frequency of harm or damage ideation",
										"_code": "hto-freq-ideatn",
										"_value-mg": "((DAILY 1) (WEEKLY 0.5) (MONTHLY 0.2) (LESS-THAN-MONTHLY 0))",
										"_values": "nominal",
										"_question": "How often do the thoughts or fantasies about harm or damage occur?"
									 },
									 {
										"_label": "strength, intensity, intrusiveness, and persistence of harm or damage ideation",
										"_code": "hto-strgth-ideatn",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_layer": "0",
										"_question": "How persistent, intrusive, or intense are the thoughts/fantasies of harm or damage?",
										"_help": "Consider the seriousness, intensity, and strength of the violence thoughts, how intrusive or pervasive they are, their persistence, and level of reality or concreteness.",
										"_scale-type": "((left \"thoughts hardly noticed\") (right \"can\'t think about anything else\"))",
										"_screening": "0"
									 },
									 {
										"_label": "thoughts/fantasies of harm or damage linked to real people, events, and circumstances",
										"_code": "hto-ideatn-link",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Do the thoughts/fantasies of harm or damage relate to the people, events, and circumstances in the person\'s own world (ie the realism of the thoughts)?",
										"_help": "Consider how much the fantasies are based on the person\'s own world and people in it rather than fictional people, locations and environments that are not linked to those of the person, or scenarios that are completely unrealistic given the person\'s own capabilities and circumstances.",
										"_scale-type": "((left \"not based on real life\") (right \"entirely about real life\"))"
									 }
								  ],
								  "_label": "ideation about violence",
								  "_code": "hto-ideation-vio",
								  "_layer": "0",
								  "_filter-q": "Is the person having thoughts or fantasies about harming people/animals or damaging property?",
								  "_screening": "0"
							   }
							],
							"_label": "current harm or damage situation and related behaviour",
							"_code": "harm-dam-curr-sit-behav"
						 }
					  ],
					  "_label": "harm/damage specific questions",
					  "_code": "hto-specific",
					  "_layer": "0",
					  "_question": "Do you have reason to be concerned about the person\'s risk of harm to others or destructive behaviour?",
					  "_screening": "0",
					  "_screening-only": "true"
				   },
				   {
					  "_label": "direct risk children",
					  "_code": "gen-direct",
					  "_generic": "generic >> gen-direct"
				   }
				],
				"_label": "harm to others or damage to property",
				"_code": "hto",
				"_value-mg": "((0 0) (10 1))",
				"_values": "scale",
				"_mg-deviation-threshold": "0.3",
				"_question": "In your judgement, what is the risk that the person will cause harm to people/animals or damage property?",
				"_help": "Consider the likelihood and consequences in the context of the person\'s circumstances after the assessment if no further action is taken.",
				"_scale-type": "((left \"no risk\") (right \"maximum risk\"))"
			 },
			 {
				"node": [
				   {
					  "node": [
						 {
							"_label": "child protection issues",
							"_code": "child-prot",
							"_value-mg": "((yes 1) (no 0))",
							"_persistent": "soft",
							"_values": "nominal",
							"_layer": "0",
							"_question": "Are there any child protection issues?",
							"_screening": "0"
						 }
					  ],
					  "_label": "dependents risk-specific questions",
					  "_code": "dependents-specific",
					  "_layer": "0",
					  "_question": "Do you have reason to be concerned about the person\'s risk to dependents?",
					  "_screening": "0",
					  "_screening-only": "true"
				   }
				],
				"_label": "risk to dependents",
				"_code": "risk-dep",
				"__FIXME": "TODO - replace mg-deviation-threshold attrib with a real version",
				"_value-mg": "((0 0) (10 1))",
				"_values": "scale",
				"_mg-deviation-threshold": "0.2",
				"_question": "In your judgement, does the person put any dependents at risk (consider both children and adults)?",
				"_help": "Consider the risk in the context of the person\'s circumstances after the assessment if no further action is taken.",
				"_scale-type": "((left \"no dependents or no risk\") (right \"extreme risk\"))"
			 },
			 {
				"node": [
				   {
					  "node": [
						 {
							"_label": "hair and clothing indicative of self neglect",
							"_code": "sn-hair-clothes",
							"_value-mg": "((0 0) (10 1))",
							"_values": "scale",
							"_question": "Do the person\'s hair and clothing indicate self-neglect?",
							"_help": "Consider inappropriateness of clothing (eg inappropriate to the current weather, size is too big, etc), state of clothing (eg tatty or dirty clothing, infested with fleas), worn shoes, dishevelled hair, etc.",
							"_scale-type": "((left \"no indication\") (right \"clear indication of self-neglect\"))"
						 },
						 {
							"_label": "personal hygiene",
							"_code": "sn-hygiene",
							"_value-mg": "((0 0) (10 1))",
							"_generic-type": "g",
							"_values": "scale",
							"_question": "Does the person have poor personal hygiene (eg smell, dirty hair and nails)?",
							"_help": "Consider smell (eg body, breath, urine. etc), state of teeth, general cleanliness (eg hair, body, skin, nails, face).",
							"_scale-type": "((left \"good personal hygiene\") (right \"very poor personal hygiene\"))"
						 },
						 {
							"_label": "recent change in appearance of self neglect",
							"_code": "sn-recnt-app-chnge",
							"_value-mg": "((0 0) (10 1))",
							"_values": "scale",
							"_question": "Has there been a recent change in appearance suggestive of self-neglect?",
							"_scale-type": "((left \"no change\") (right \"extreme change suggesting self-neglect\"))"
						 },
						 {
							"_label": "skin",
							"_code": "sn-skin",
							"_value-mg": "((0 0) (10 1))",
							"_values": "scale",
							"_question": "To what extent does the person\'s skin (condition, lesions, injuries, etc) indicate self-neglect?",
							"_scale-type": "((left \"no indication\") (right \"clear indication of self-neglect\"))"
						 }
					  ],
					  "_label": "appearance indicators of self neglect",
					  "_code": "sn-appearnce",
					  "_generic-type": "g",
					  "_layer": "0",
					  "_filter-q": "Is the person showing signs of self-neglect?",
					  "_screening": "0"
				   },
				   {
					  "_label": "direct risk children",
					  "_code": "gen-direct",
					  "_generic": "generic >> gen-direct"
				   }
				],
				"_label": "self neglect",
				"_code": "sn",
				"_value-mg": "((0 0) (10 1))",
				"_values": "scale",
				"_mg-deviation-threshold": "0.3",
				"_question": "In your judgement, to what extent is the person failing to look after him or herself?",
				"_scale-type": "((left \"not failing at all\") (right \"failing completely\"))"
			 },
			 {
				"node": [
				   {
					  "node": [
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "causes of falls and accidents known",
										"_code": "falls-reasons",
										"_value-mg": "((yes 0) (no 1))",
										"_persistent": "soft",
										"_values": "nominal",
										"_question": "Are the reasons for the falls or accidents known (eg physical health problems, hazards in the home)?",
										"_help": "The key issue is whether any reasons are still unknown because this will make it difficult to put in place interventions reducing the risk"
									 }
								  ],
								  "_label": "recent-falls",
								  "_code": "recent-falls",
								  "_persistent": "soft",
								  "_filter-q": "Have any of the falls or accidents occurred recently (within the last year approximately)?"
							   },
							   {
								  "_label": "fragility fractures",
								  "_code": "frailty",
								  "_value-mg": "((yes 1) (no 0))",
								  "_persistent": "soft",
								  "_values": "nominal",
								  "_question": "Has the person ever sustained a fragility fracture (broken bone after a minor bump or fall), e.g. wrist, hip, vertebra, humerus?"
							   }
							],
							"_label": "falls",
							"_code": "falls",
							"_persistent": "hard",
							"_layer": "0",
							"_filter-q": "Does the person have a history of falls or other accidents?",
							"_screening": "0"
						 },
						 {
							"node": [
							   {
								  "_label": "appearance suggesting abuse by others",
								  "_code": "app-vuln-abuse",
								  "_value-mg": "((0 0)(10 1))",
								  "_values": "scale",
								  "_question": "Does the person\'s appearance cause you concern about abuse by others (eg bruises, scratches, blood, state of clothes)?",
								  "_scale-type": "((left \"no suggestion of abuse by others\") (right \"appearance of extreme abuse\"))"
							   },
							   {
								  "node": [
									 {
										"_label": "sexual vulnerability",
										"_code": "sex-vuln",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person\'s behaviour make him or her vulnerable to sexual harrassment or abuse?",
										"_scale-type": "((left \"not vulnerable\") (right \"extremely vulnerable\"))"
									 },
									 {
										"_label": "physical vulnerability",
										"_code": "phys-vuln",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person\'s behaviour make him or her vulnerable to physical harrassment or abuse?",
										"_scale-type": "((left \"not vulnerable\") (right \"extremely vulnerable\"))"
									 },
									 {
										"_label": "emotional vulnerability",
										"_code": "emot-vuln",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person\'s behaviour make him or her vulnerable to emotional harrassment or abuse?",
										"_scale-type": "((left \"not vulnerable\") (right \"extremely vulnerable\"))"
									 },
									 {
										"_label": "financial vulnerability",
										"_code": "finan-vuln",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person\'s behaviour make him or her vulnerable to financial abuse?",
										"_scale-type": "((left \"not vulnerable\") (right \"extremely vulnerable\"))"
									 }
								  ],
								  "_label": "behaviour causing potential vulnerability to abuse by others",
								  "_code": "vuln-abuse-behav"
							   },
							   {
								  "_label": "wandering behaviour",
								  "_code": "wandering",
								  "_value-mg": "((yes 1) (no 0))",
								  "_persistent": "soft",
								  "_values": "nominal",
								  "_question": "Does the person have a history of wandering behaviour?",
								  "_help": "Consider previous episodes and current situation."
							   },
							   {
								  "_label": "confusion and disorientation",
								  "_code": "dis-conf",
								  "_value-mg": "((0 0) (10 1))",
								  "_values": "scale",
								  "_question": "Is the person confused or disorientated as a result of recent changes in circumstances (eg hospital admission, new carer)?",
								  "_help": "This question is about temporary cognitive disorders due to a recent change in a person\'s situation rather than longer-term organic problems that are covered in the mental faculties/cognitive capacity questions.",
								  "_scale-type": "((left \"not confused\") (right \"extremely confused\"))"
							   }
							],
							"_label": "person\'s appearance and behaviour indicators of vulnerability",
							"_code": "vuln-app-behavr",
							"_layer": "0",
							"_question": "Do you have reason to be concerned about appearance or behaviour issues that may be putting the person at risk (consider physical, emotional, sexual, and financial vulnerability)?",
							"_screening": "0"
						 },
						 {
							"node": [
							   {
								  "_label": "dependence on carers",
								  "_code": "carers",
								  "_value-mg": "((0 0) (10 1))",
								  "_persistent": "soft",
								  "_values": "scale",
								  "_question": "How much does the person depend on carers?",
								  "_help": "Consider how much the person is reliant on carers for general living requirements",
								  "_scale-type": "((left \"no carers\") (right \"extremely dependent\"))"
							   },
							   {
								  "_label": "living skills",
								  "_code": "gen-liv-skills",
								  "_value-mg": "((0 0) (10 1))",
								  "_persistent": "soft",
								  "_values": "scale",
								  "_question": "Does the person lack the ability to look after daily living requirements (cooking, shopping, cleaning, etc)?",
								  "_help": "Consider lack of ability to maintain safe and clean environment, to look after personal hygiene (eg dressing), ability to budget, cooking skills, etc.",
								  "_scale-type": "((left \"able to look after living requirements\")(right \"totally unable\"))"
							   }
							],
							"_label": "ability to live independently",
							"_code": "indep-living",
							"_layer": "0",
							"_question": "Do you have reason to be concerned about the person\'s ability to live independently?",
							"_screening": "0"
						 }
					  ],
					  "_label": "vulnerability specific questions",
					  "_code": "vuln-specific",
					  "_layer": "0",
					  "_question": "Do you have reason to be concerned about the person\'s vulnerability?",
					  "_screening": "0",
					  "_screening-only": "true"
				   },
				   {
					  "_label": "direct risk children",
					  "_code": "gen-direct",
					  "_generic": "generic >> gen-direct"
				   }
				],
				"_label": "vulnerability of service user",
				"_code": "vuln-su",
				"_value-mg": "((0 0) (10 1))",
				"_values": "scale",
				"_question": "In your judgement, how vulnerable is the person (consider physical, emotional, sexual, and financial vulnerability)?",
				"_scale-type": "((left \"not vulnerable\") (right \"extremely vulnerable\"))"
			 },
			 {
				"node": [
				   {
					  "node": [
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "mood swings/lability",
										"_code": "gen-mood-swings",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person have sudden mood changes or swings?",
										"_scale-type": "((left \"no sudden mood changes\") (right \" moods always changing suddenly\"))"
									 },
									 {
										"_label": "negative feelings about the self",
										"_code": "gen-negative-self",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person have negative feelings about him or herself (eg self-hatred, guilt, shame, humiliation)?",
										"_pathways": "(wellbeing ptsd)",
										"_scale-type": "((left \"no negative feelings\") (right \"extremely negative feelings\"))"
									 },
									 {
										"node": [
										   {
											  "_label": "plans for the future",
											  "_code": "gen-plans-future",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Does the person lack any plans for the future?",
											  "_help": "Consider how soon are the plans for (eg next week), how concrete are the plans, etc.",
											  "_pathways": "(wellbeing)",
											  "_scale-type": "((left \"lots of plans\") (right \"no plans\"))"
										   },
										   {
											  "_label": "life not worth living",
											  "_code": "gen-life-not-livng",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_layer": "0",
											  "_question": "Does the person think life is not worth living?",
											  "_help": "This includes having nothing to look forward to, no possibility of change for the better, pessimism, etc.",
											  "_scale-type": "((left \"well worth living\") (right \"not worth living at all\"))",
											  "_screening": "0"
										   }
										],
										"_label": "hopelessness",
										"_code": "gen-hopeless",
										"_generic-type": "g",
										"_header": "Questions on hopelessness"
									 },
									 {
										"_label": "angry emotions",
										"_code": "gen-angry-emotns",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person displaying anger?",
										"_help": "This includes the person being angry, irritable, frustrated, aggressive, etc.",
										"_pathways": "(ptsd)",
										"_scale-type": "((left \"no anger\") (right \"extremely angry\"))",
										"_screening": "0"
									 },
									 {
										"_label": "anxiety-based emotions",
										"_code": "gen-anx-emotns",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person anxious or fearful?",
										"_help": "This includes the person feeling panic, fear, insecurity, threat, suspicion, having no trust in themselves.",
										"_pathways": "(wellbeing ptsd)",
										"_scale-type": "((left \"not anxious\") (right \"extremely anxious/fearful\"))"
									 },
									 {
										"_label": "helplessness",
										"_code": "gen-helpless",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person feel helpless?",
										"_help": "This includes the person feeling trapped, despair, lack of or out of control.",
										"_pathways": "(wellbeing)",
										"_scale-type": "((left \"not helpless\") (right \"completely helpless\"))"
									 },
									 {
										"_label": "sad/downbeat",
										"_code": "gen-sad",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person feeling sad or low?",
										"_help": "This includes the person feeling grief, flat, lonely, unhappy.",
										"_pathways": "(wellbeing)",
										"_scale-type": "((left \"not sad\") (right \"extremely sad/low\"))"
									 },
									 {
										"_label": "distress",
										"_code": "gen-distress",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person distressed?",
										"_help": "This includes the person being tormented, agitated, etc.",
										"_pathways": "(wellbeing)",
										"_scale-type": "((left \"no distress\") (right \"extremely distressed\"))"
									 },
									 {
										"_label": "jealousy",
										"_code": "gen-jealous",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person feeling jealous?",
										"_scale-type": "((left \"no jealousy\") (right \"extremely jealous\"))"
									 }
								  ],
								  "_label": "feelings/emotions",
								  "_code": "gen-feel-emot",
								  "_generic-type": "gd",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about risks due to the person\'s feelings/emotions?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "grandiosity",
										"_code": "grandiosity",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person feel special and able to control everything?",
										"_scale-type": "((left \"not particularly special\") (right \"totally special and in complete control\"))"
									 },
									 {
										"_label": "worthlessness",
										"_code": "worthlessness",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_layer": "0",
										"_question": "Does the person regard him or herself as worthless?",
										"_pathways": "(wellbeing)",
										"_scale-type": "((left \"worthwhile\") (right \"completely worthless\"))",
										"_screening": "0"
									 }
								  ],
								  "_label": "person\'s perspective of self worth",
								  "_code": "gen-self-worth-p",
								  "_persistent": "soft",
								  "_generic-type": "gd",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about risks due to the person\'s sense of self worth?",
								  "_help": "Consider both grandiose feelings (eg feeling of being powerful/omnipotent, exaggerated self worth, sense of being special) and feelings of worthlessness (nothing to lose, don\'t care about the consequences), both of which may indicate a propensity for risky behaviours.",
								  "_screening": "0"
							   }
							],
							"_label": "state of mind",
							"_code": "gen-state-mind",
							"_generic-type": "gd"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "assertiveness",
										"_code": "gen-assertive",
										"_value-mg": "(([suic >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0))) ([sh >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0))) ([sn >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0))) ([hto >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 0) (SOMEWHAT-ASSERTIVE 0.1) (NORMALLY-ASSERTIVE 0.2) (VERY-ASSERTIVE 0.5) (EXTREMELY-ASSERTIVE 1))) ([risk-dep >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 0.5) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0.3)    (EXTREMELY-ASSERTIVE 1))) ([vuln-su >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 1) (SOMEWHAT-ASSERTIVE 0.3) (NORMALLY-ASSERTIVE 0) (VERY-ASSERTIVE 0) (EXTREMELY-ASSERTIVE 0)))([absconding >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 0) (SOMEWHAT-ASSERTIVE 0.1) (NORMALLY-ASSERTIVE 0.2) (VERY-ASSERTIVE 0.5) (EXTREMELY-ASSERTIVE 1))([substance-misuse >> gen-person-thinking >> gen-personality >> gen-assertive] ((NOT-ASSERTIVE 0) (SOMEWHAT-ASSERTIVE 0.1) (NORMALLY-ASSERTIVE 0.2) (VERY-ASSERTIVE 0.5) (EXTREMELY-ASSERTIVE 1))))",
										"_persistent": "soft",
										"_generic-type": "gd",
										"_values": "nominal",
										"_question": "How assertive is the person?",
										"_help": "How much is the person able to put views across, insist that others listen and make sure he or she gets what is needed from others?"
									 },
									 {
										"_label": "ability to empathise",
										"_code": "gen-empathy-abil",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person lack empathy?",
										"_help": "Think about what is normal empathy you would expect in people and how much this may be lacking.",
										"_scale-type": "((left \"empathy\")(right \"no empathy\"))"
									 },
									 {
										"_label": "dependence",
										"_code": "gen-dependence",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Is the person overdependent (weak, over-reliant on others, easily influenced, unable to function independently)?",
										"_scale-type": "((left \"not over-dependent\") (right \"totally over-dependent\"))"
									 },
									 {
										"_label": "controlling/organisational approach",
										"_code": "gen-controlling",
										"_value-mg": "(([suic >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 0.5) (disorganised 0.2) (normal 0) (very-organised 0.5)(obsessional-perfectionist 1))) ([sh >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 0.5) (disorganised 0.2) (normal 0) (very-organised 0.5)(obsessional-perfectionist 1))) ([sn >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 1) (disorganised 0.2) (normal 0) (very-organised 0)(obsessional-perfectionist 0))) ([hto >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 0) (disorganised 0) (normal 0) (very-organised 0)(obsessional-perfectionist 0))) ([risk-dep >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 1) (disorganised 0.2) (normal 0) (very-organised 0.1)(obsessional-perfectionist 0.5))) ([vuln-su >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 1) (disorganised 0.2) (normal 0) (very-organised 0.1)(obsessional-perfectionist 0.2)))([absconding >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 0) (disorganised 0) (normal 1) (very-organised 1)(obsessional-perfectionist 0)))([substance-misuse >> gen-person-thinking >> gen-personality >> gen-controlling] ((chaotic 0) (disorganised 0) (normal 1) (very-organised 1)(obsessional-perfectionist 0))))",
										"_persistent": "soft",
										"_generic-type": "gd",
										"_values": "nominal",
										"_question": "How organised is the person\'s general approach to life?",
										"_help": "This includes the person being regimented, perfectionist, having obsessional traits, or having chaotic approach to organising life."
									 },
									 {
										"_label": "capacity to cope with major life stresses",
										"_code": "gen-coping-abil",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person lack the ability to cope with major life stresses?",
										"_scale-type": "((left \"able to cope\")(right \"unable to cope\"))"
									 },
									 {
										"_label": "hostility",
										"_code": "gen-hostile",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "How hostile is the person?",
										"_help": "Think about whether the person tends to be unfriendly, prickly, aggressive or argumentative.",
										"_pathways": "(ptsd)",
										"_scale-type": "((left \"not hostile\") (right \"extremely hostile\"))",
										"_screening": "0"
									 },
									 {
										"_label": "impulsiveness",
										"_code": "gen-impulse",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_layer": "0",
										"_question": "How impulsive is the person?",
										"_help": "Think about how likely the person is to do things on the spur of the moment.",
										"_scale-type": "((left \"not impulsive\") (right \"extremely impulsive\"))",
										"_screening": "0"
									 },
									 {
										"_label": "reliability",
										"_code": "gen-reliable",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "How unreliable is the person (eg untrustworthy or unpredictable)?",
										"_scale-type": "((left \"reliable and trustworthy\")(right \"totally unreliable and untrustworthy\"))"
									 },
									 {
										"_label": "personality disorder",
										"_code": "gen-pers-dis",
										"_value-mg": "((YES 1) (NO 0))",
										"_persistent": "hard",
										"_values": "nominal",
										"_question": "Does the person have a diagnosed personality disorder?"
									 }
								  ],
								  "_label": "personality issues",
								  "_code": "gen-personality",
								  "_persistent": "soft",
								  "_generic-type": "gd",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about personality factors and their impact on risks?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "impaired cognitive function",
										"_code": "gen-impaird-cog",
										"_value-mg": "((none 0)(mild 0.3)(moderate 0.6)(severe 1))",
										"_persistent": "soft",
										"_values": "nominal",
										"_question": "What is the current level of impaired thinking processes and memory?"
									 },
									 {
										"_label": "changes in thinking processes and memory",
										"_code": "gen-cog-think-mem",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Have the thinking processes and memory recently got worse?",
										"_help": "Consider changes within the last few months, including the person\'s inability to follow conversation, long silences during conversation with the person, etc. Maximum deterioration should be considered equivalent to full dementia.",
										"_pathways": "(wellbeing)",
										"_scale-type": "((left \"no change\") (right \"recently become totally confused and forgetful\"))"
									 },
									 {
										"_label": "concentration",
										"_code": "gen-concentr",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Is the person able to concentrate?",
										"_pathways": "(wellbeing)",
										"_scale-type": "((left \"able to concentrate\")(right \"unable to concentrate\"))"
									 },
									 {
										"_label": "learning disabilities",
										"_code": "gen-learn-disab",
										"_value-mg": "((none 0)(mild 0.3)(moderate 0.6)(severe 0.8) (profound 1))",
										"_persistent": "soft",
										"_values": "nominal",
										"_question": "Do you believe the person has learning disabilities?",
										"_help": "Think about reading difficulties or inability to solve problems.",
										"_scale-type": "((left \"no learning disabilities\") (right \"severe learning disabilities\"))"
									 }
								  ],
								  "_label": "problems with mental faculties/cognitive capacity",
								  "_code": "ment-fac",
								  "_persistent": "soft",
								  "_generic-type": "g",
								  "_layer": "0",
								  "_filter-q": "Is there any impaired cognitive function (thinking processes, memory, concentration) or dementia?",
								  "_pathways": "(ptsd)"
							   },
							   {
								  "node": [
									 {
										"_label": "insight into behaviour and consequences",
										"_code": "gen-insght-behvr",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person fail to understand the potential consequences of taking risks?",
										"_scale-type": "((left \"full understanding\")(right \"no understanding\"))"
									 },
									 {
										"_label": "responsibility for impact of behaviour on others",
										"_code": "gen-resp-impct-oth",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person lack any sense of responsibility for the outcomes of risk-taking behaviour?",
										"_scale-type": "((left \"full responsibility\")(right \"no responsibility\"))"
									 },
									 {
										"_label": "need for help with difficulties",
										"_code": "gen-nd-hlp-diff",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person lack insight about needing help with mental-health issues?",
										"_scale-type": "(left \"full insight\") (right \"no insight\")"
									 }
								  ],
								  "_label": "insight and responsibility",
								  "_code": "insight-resp",
								  "_persistent": "soft",
								  "_generic-type": "g",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about the person\'s lack of insight and sense of responsibility?"
							   }
							],
							"_label": "personality and way of thinking",
							"_code": "gen-person-thinking",
							"_generic-type": "gd"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "stage of depression",
											  "_code": "gen-dep-stage",
											  "_value-mg": "((FIRST-DIAGNOSIS 1) (RECOVERY-SINGLE-EPISODE 0) (RECOVERY-REPEAT-EPISODES 0.4) (RELAPSE 1))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_layer": "0",
											  "_question": "Select the most appropriate label for the current depression status?",
											  "_help": "First diagnosis - first time the person is known to have suffered from depression; recovery single episode - in recovery from a first period of depression; recovery repeat episodes - in recovery from a repeated period of depression; relapse - the person has gone back into depression having suffered from it previously",
											  "_screening": "0"
										   }
										],
										"_label": "clinical diagnosis of depression",
										"_code": "clin-depression",
										"_persistent": "hard",
										"_layer": "0",
										"_filter-q": "Has the person ever been diagnosed with clinical depression?",
										"_screening": "0"
									 },
									 {
										"node": [
										   {
											  "_label": "mania/hypomania",
											  "_code": "gen-mania",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Is the person displaying manic or hypomanic behaviour (fast speech, excessive irritability, recklessness, impulsivity, etc)?",
											  "_scale-type": "((left \"not manic\") (right \"extremely manic\"))"
										   },
										   {
											  "node": [
												 {
													"node": [
													   {
														  "_label": "danger of voices to self",
														  "_code": "gen-voice-dang-s",
														  "_value-mg": "((0 0) (10 1))",
														  "_values": "scale",
														  "_layer": "0",
														  "_question": "How much do the voices urge the person to harm or endanger him/herself?",
														  "_help": "Is the person hearing voices that are encouraging suicidal behaviour such as jumping off a bridge? Are the voices threatening the person with dire consequences if they are disobeyed? How influential are the voices (do they represent God or any other figure of authority for the person)?",
														  "_scale-type": "((left \"no urging\") (right \"strongly urging\"))",
														  "_screening": "0"
													   },
													   {
														  "_label": "danger of voices to others",
														  "_code": "gen-voice-dang-o",
														  "_value-mg": "((0 0) (10 1))",
														  "_values": "scale",
														  "_layer": "0",
														  "_question": "How much do the voices urge the person to harm/endanger other people?",
														  "_scale-type": "((left \"no urging\") (right \"strongly urging\"))",
														  "_screening": "0"
													   }
													],
													"_label": "type of voices",
													"_code": "gen-voices-type"
												 },
												 {
													"_label": "likelihood of acting on the voices",
													"_code": "gen-prob-act-voice",
													"_value-mg": "((0 0) (10 1))",
													"_values": "scale",
													"_layer": "0",
													"_question": "Will the person act on the voices?",
													"_help": "Consider ability to distract from and to resist voices, level of belief in voices and will to obey them.",
													"_scale-type": "((left \"extremely unlikely\") (right \"extremely likely\"))",
													"_screening": "0"
												 }
											  ],
											  "_label": "voice hallucinations",
											  "_code": "gen-voice-hal",
											  "_generic-type": "g",
											  "_layer": "0",
											  "_filter-q": "Does the person hear voices that are not present in reality?",
											  "_screening": "0"
										   },
										   {
											  "node": [
												 {
													"node": [
													   {
														  "_label": "thoughts about particular individuals",
														  "_code": "gen-paran-del-spec",
														  "_value-mg": "((0 0) (10 1))",
														  "_values": "scale",
														  "_question": "Is the person obsessed about the perceived bad behaviour of particular known people?",
														  "_help": "Examples include an obsession with the partner having an affair, being spied upon by neighbours or the police, believing a neighbour is engaging in child abuse, etc.",
														  "_scale-type": "((left \"no obsession\") (right \"completely obsessed\"))"
													   },
													   {
														  "_label": "being harmed, killed, or persecuted",
														  "_code": "gen-paran-del-pers",
														  "_value-mg": "((0 0) (10 1))",
														  "_values": "scale",
														  "_question": "Is the person obsessed about being harmed or persecuted by particular known people?",
														  "_help": "This includes obsession with imminent death, being infected, people dying without person\'s intervention, being sexually abused in sleep, persecutory ideas, conspiracy, being watched, etc.",
														  "_scale-type": "((left \"no obsession\") (right \"completely obsessed\"))"
													   }
													],
													"_label": "type of paranoid delusions",
													"_code": "gen-type-paranoid-del"
												 },
												 {
													"_label": "likelihood of acting on delusions",
													"_code": "gen-prob-act-par-del",
													"_value-mg": "((0 0) (10 1))",
													"_values": "scale",
													"_layer": "0",
													"_question": "How likely is it that the person will act on any delusions?",
													"_scale-type": "((left \"extremely unlikely\") (right \"extremely likely\"))",
													"_screening": "0"
												 }
											  ],
											  "_label": "paranoid delusions",
											  "_code": "gen-paranoid-del",
											  "_generic-type": "g",
											  "_layer": "0",
											  "_filter-q": "Does the person suffer from delusions (ie clearly incorrect and illogical ideas about his or her life and circumstances)?",
											  "_screening": "0"
										   }
										],
										"_label": "current symptoms of mental illness",
										"_code": "gen-mntl-cur-sympt",
										"_layer": "0",
										"_filter-q": "Is the person currently suffering from mania, hallucinations, or delusions?",
										"_screening": "0"
									 }
								  ],
								  "_label": "history of mental health problems",
								  "_code": "mental-health",
								  "_persistent": "hard",
								  "_layer": "0",
								  "_filter-q": "Does the person have any history of depression, mania, hallucinations, or delusions?",
								  "_screening": "0"
							   },
							   {
								  "node": [
									 {
										"_label": "chronic disease",
										"_code": "gen-chronic-disease",
										"_value-mg": "((tinnitus 1)(diabetes 1)(multiple-sclerosis 1)(asthma 1)(heart-disease 1)(kidney-disease 1)(lung-disease 1)(arthritis 1)(high-blood-pressure 1)(other 1))",
										"_multiple-tick": "((tinnitus \"Is tinnitus one of the chronic health conditions?\" [tinnitus])(diabetes \"Is diabetes one of the chronic health conditions\" [diabetes])(multiple-sclerosis \"Is multiple sclerosis one of the chronic health conditions?\" [multiple sclerosis])(asthma \"Is asthma one of the chronic health conditions?\" [asthma])(heart-disease \"Is heart disease one of the chronic health conditions?\" [heart disease])(kidney-disease \"Is kidney disease one of the chronic health conditions?\" [kidney disease])(lung-disease \"Is lung disease one of the chronic health conditions?\" [lung disease])(arthritis \" Is arthritis one of the chronic health conditions?\" [arthritis])(high-blood-pressure \"Is high blood pressure one of the chronic health conditions?\" [high blood pressure])(other \"Are there any other chronic health conditions?\" [any other condition]))",
										"_persistent": "soft",
										"_values": "nominal",
										"_question": "Does the person suffer from any chronic health conditions? If yes, select all those that apply.",
										"_help": "If you ticked \'other\' (which is at the bottom of all the conditions so may not be visible without scrolling) then please give the condition in the comment box."
									 },
									 {
										"_label": "when life-threatening or degenerative illness first diagnosed",
										"_code": "gen-phys-hlth-deg-diag",
										"_value-mg": "((3 1) (36 0))",
										"_persistent": "hard",
										"_values": "date-month",
										"_question": "If the person has a life-threatening or degenerative illness (eg cancer, multiple sclerosis, Parkinson\'s, emphysema, HIV), when was it first diagnosed?",
										"_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine."
									 },
									 {
										"_label": "pain",
										"_code": "gen-phys-hlth-pain",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "If the person suffers from chronic or periodic pain, how bad is it?",
										"_help": "Consider the level of pain, how much it affects the person (eg episodic, chronic), treatment of pain (eg poorly controlled), location of pain (eg pain in bones), etc.",
										"_scale-type": "((left \"no pain\") (right \"extremely bad pain\"))"
									 },
									 {
										"_label": "mobility and dexterity",
										"_code": "gen-phys-hlth-disa",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person suffer from problems that affect mobility and/or dexterity (eg eyesight, balance, disability due to disease or trauma)?",
										"_help": "Think about the ability to balance, hand-eye co-ordination, any problems linked to sight, hearing, touch, smell etc that might affect movement. Also think about any disabilities affecting muscles, joints, limbs etc. that make it hard to walk, climb stairs, etc.",
										"_scale-type": "((left \"no mobility/dexterity problems\") (right \"serious difficulties with mobility/dexterity\"))"
									 },
									 {
										"_label": "communication impairment",
										"_code": "gen-com-imp",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Does the person have trouble communicating as a result of physical health problems (eg hearing, speech)?",
										"_scale-type": "((left \"no communication problems\") (right \"extreme difficulty comunicating\"))"
									 },
									 {
										"_label": "deterioration in physical health",
										"_code": "gen-phys-hlth-det",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_question": "Has the person\'s physical health got worse over the last few months, including temporary or repeating problems?",
										"_help": "Think about both short and long-term problems e.g. repeated infections and chronic constipation, as well as disability, or disfigurement etc.",
										"_scale-type": "((left \"stayed the same\") (right \"got much worse\"))"
									 }
								  ],
								  "_label": "physical health problems",
								  "_code": "gen-phys-hlth-prb",
								  "_generic-type": "gd",
								  "_persistent": "soft",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about risks due to any physical health problems?"
							   },
							   {
								  "node": [
									 {
										"_label": "concordance",
										"_code": "gen-meds-concord",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person failing to concord with medication or therapies, either deliberately or due to multiple medications, for example?",
										"_help": "Think about the extent to which health-care advice is followed, or medication or treatment is not taken either deliberately or by mistake, because it is confusing or forgotten.",
										"_scale-type": "((left \"doing everything as prescribed\")(right \"not following prescriptions at all\"))"
									 },
									 {
										"_label": "person\'s perception of the supportiveness of service received",
										"_code": "gen-serv-perc-supp",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person think health or social care services are not supportive?",
										"_scale-type": "((left \"extremely supportive\")(right \"no support at all\"))"
									 },
									 {
										"_label": "perceived benefit of medication/therapies",
										"_code": "gen-med-perc-benft",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person and/or carer think any medication/therapies are not working properly?",
										"_help": "Consider the person\'s belief in physical side effects (eg weight gain, distress), psychological/emotional side effects (eg hospitalisation is seen as punishment), or faith in services.  Also consider effect of medication/therapies on insight, how soon does the person respond to treatment, level of response (eg successful outcome), etc.",
										"_scale-type": "((left \"working properly or not on medication/treatment\")(right \"not working at all\"))"
									 }
								  ],
								  "_label": "concordance with health services/medication/therapies",
								  "_code": "gen-meds-therpy",
								  "_generic-type": "g",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about the person\'s concordance with health treatment?"
							   }
							],
							"_label": "health and care",
							"_code": "gen-health-care",
							"_generic-type": "gd"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "physical withdrawal from world",
											  "_code": "gen-phys-withd",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Is the person physically isolated from the world?",
											  "_scale-type": "((left \"not isolated\") (right \"completely isolated\"))"
										   },
										   {
											  "_label": "mental withdrawal",
											  "_code": "gen-mental-withd",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Has the person mentally disengaged or withdrawn from the world?",
											  "_pathways": "(wellbeing)",
											  "_scale-type": "((left \"no withdrawal\")(right \"totally withdrawn\"))"
										   }
										],
										"_label": "engagement with world",
										"_code": "gen-eng-world",
										"_generic-type": "gd"
									 },
									 {
										"_label": "general motivation in life",
										"_code": "gen-motivation",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person lack motivation in general life?",
										"_help": "Has the person no plans, lack interests, have no desire to change, displays excessive apathy, etc.",
										"_pathways": "(wellbeing ptsd)",
										"_scale-type": "((left \"motivated\")(right \"no motivation at all\"))"
									 },
									 {
										"_label": "lack of energy, drive, or enthusiasm",
										"_code": "gen-listless",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person appear listless or lacking energy and drives (eg loss of enthusiasm and libido)?",
										"_pathways": "(wellbeing)",
										"_scale-type": "((left \"energetic and enthusiastic\")(right \"no energy or enthusiasm at all\"))"
									 }
								  ],
								  "_label": "motivation and engagement with world",
								  "_code": "motive-eng",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about the person\'s motivation and engagement with the world?"
							   },
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "external network of relationships",
											  "_code": "gen-net-relat",
											  "_value-mg": "((0 0) (10 1))",
											  "_persistent": "soft",
											  "_values": "scale",
											  "_question": "Does the person lack a good network of relationships outside the home?",
											  "_help": "Think about people who don\'t live in the same house, including other family members, friends, neighbours, carers.",
											  "_pathways": "(wellbeing ptsd)",
											  "_scale-type": "((left \"good network\")(right \"no network\"))"
										   },
										   {
											  "node": [
												 {
													"_label": "any supportive relationships",
													"_code": "gen-relat-supp",
													"_value-mg": "((0 0) (10 1))",
													"_persistent": "soft",
													"_values": "scale",
													"_question": "Does the person lack supportive relationships?",
													"_help": "This includes proximity and stability in relationships, supportive relationships (eg confiding and caring relationships), relationships that provide security, respect and empathy. Emphasis should be on the importance and centrality of relationships within the family.",
													"_pathways": "(wellbeing)",
													"_scale-type": "((left \"supportive relationships\")(right \"no supportive relationships\"))"
												 },
												 {
													"_label": "detrimental relationships",
													"_code": "gen-relat-detr",
													"_value-mg": "((0 0) (10 1))",
													"_persistent": "soft",
													"_values": "scale",
													"_question": "Does the person have detrimental relationships (eg bullied, over-protected) or ones with people who have antisocial behaviours or who take advantage of the person?",
													"_scale-type": "((left \"no bad relationship\") (right \"extremely bad relationship(s)\"))"
												 }
											  ],
											  "_label": "nature of relationships",
											  "_code": "gen-relat-nature"
										   },
										   {
											  "_label": "detrimental changes to relationships",
											  "_code": "gen-relat-detr-chg",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Does the person think important relationships have changed for the worse or soon will do (eg divorce, separation, rows, carer\'s role, bereavement)?",
											  "_scale-type": "((left \"no changes for the worse\") (right \"extreme changes for the worse\"))"
										   }
										],
										"_label": "relationships",
										"_code": "gen-relatnshps",
										"_persistent": "soft",
										"_generic-type": "gd",
										"_layer": "0",
										"_question": "Do you have reason to be concerned about risks due to the person\'s current relationships?"
									 },
									 {
										"node": [
										   {
											  "_label": "frequency of moving accommodation",
											  "_code": "gen-move-freq",
											  "_value-mg": "((LESS-THAN-EVERY-YEAR 0) (ONCE-EVERY-YEAR 0.5) (SEVERAL-TIMES-YEAR 0.8) (ONCE-A-MONTH-OR-MORE 1))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_question": "How often does the person\'s living place change?"
										   },
										   {
											  "_label": "losing accommodation",
											  "_code": "gen-accom-loss",
											  "_value-mg": "((yes 1)(no 0))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_question": "Has the accommodation recently been taken away from the person or is it under threat of being taken away?"
										   },
										   {
											  "_label": "support at home",
											  "_code": "gen-home-type",
											  "_value-mg": "((HOMELESS 1) (HOSTEL 0.8) (TWENTY-FOUR-HOUR-CARE-OR-SUPERVISION 0) (daily-support 0.1)(limited-support 0.2)(no-support 0.5))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_question": "What type of supported living does the person have?"
										   },
										   {
											  "node": [
												 {
													"_label": "isolated accommodation",
													"_code": "gen-isol-accom",
													"_value-mg": "((0 0) (10 1))",
													"_persistent": "soft",
													"_values": "scale",
													"_question": "Is the person\'s accommodation isolated from other living abodes and resources?",
													"_help": "This includes ability to reach resources (eg person can\'t drive).",
													"_scale-type": "((left \"not isolated\")(right \"totally isolated\"))"
												 },
												 {
													"_label": "risky neighbourhood",
													"_code": "gen-neigbrhd-rsky",
													"_value-mg": "((0 0) (10 1))",
													"_persistent": "soft",
													"_values": "scale",
													"_question": "Does the neighbourhood or care environment increase the person\'s particular risks (eg violent, easy access to drugs and unhelpful temptations)?",
													"_help": "Consider neighbours, type of neighbourhood (eg inner city, deprived, rough, drug and violent areas), locations tempting risky acts (eg kindergarten), nature of the institution the person may be in, etc.",
													"_scale-type": "((left \"no increase in risks\") (right \"huge increase in risks\"))"
												 }
											  ],
											  "_label": "neighbourhood",
											  "_code": "gen-neighbrhd"
										   },
										   {
											  "node": [
												 {
													"_label": "care of home",
													"_code": "gen-accom-hm-care",
													"_value-mg": "((0 0) (10 1))",
													"_values": "scale",
													"_question": "Is the person\'s accommodation showing lack of care?",
													"_help": "Consider cleanliness of the home and the general state of repair of objects/furniture within it.",
													"_scale-type": "((left \"well cared for\")(right \"totally lacking care\"))"
												 },
												 {
													"_label": "habitable accommodation",
													"_code": "gen-accom-habitbl",
													"_value-mg": "((0 0) (10 1))",
													"_values": "scale",
													"_question": "Does the person think the accommodation is unfit to live in?",
													"_help": "This includes warmth, power supply, services or food provided with accommodation.",
													"_scale-type": "((left \"fit to live in\")(right \"totally unfit to live in\"))"
												 }
											  ],
											  "_label": "state of accommodation",
											  "_code": "gen-accom-state"
										   }
										],
										"_label": "living arrangements",
										"_code": "gen-living-arr",
										"_generic-type": "gd",
										"_layer": "0",
										"_question": "Do you have reason to be concerned about risks due to the person\'s living arrangements?"
									 },
									 {
										"node": [
										   {
											  "node": [
												 {
													"_label": "anxiety about perceived level of debts",
													"_code": "gen-perc-debt-anx",
													"_value-mg": "((0 0) (10 1))",
													"_values": "scale",
													"_question": "How anxious is the person about perceived levels of debt?",
													"_scale-type": "((left \"no debts/not anxious\") (right \"extremely anxious\"))"
												 },
												 {
													"_label": "chronic poverty",
													"_code": "gen-poverty",
													"_value-mg": "((0 0) (10 1))",
													"_persistent": "soft",
													"_values": "scale",
													"_question": "Does the person\'s income fail to cover the essential living costs of the household (food, rent, heating, etc)?",
													"_scale-type": "((left \"can cover the costs\")(right \"nowhere near enough\"))"
												 }
											  ],
											  "_label": "financial problems",
											  "_code": "gen-finance-prob",
											  "_persistent": "soft",
											  "_header": "Questions on financial problems"
										   },
										   {
											  "node": [
												 {
													"_label": "frequency of changing jobs",
													"_code": "gen-job-chg-frq",
													"_value-mg": "((0 0) (10 1))",
													"_persistent": "soft",
													"_values": "scale",
													"_question": "How unstable is the person\'s employment history (eg always changing, poor disciplinary record)?",
													"_help": "Consider the person\'s inability to sustain work, obtain any work, disciplinary records, etc.",
													"_scale-type": "((left \"stable\")(right \"completely unstable\"))"
												 },
												 {
													"_label": "recent or potential detrimental change to employment",
													"_code": "gen-rec-bad-job-ch",
													"_value-mg": "((0 0) (10 1))",
													"_values": "scale",
													"_question": "Does the person believe a recent or potential change in employment is detrimental (eg loss of job, retirement, work stress)?",
													"_help": "If the assessment is for child/adolescent, consider whether a favourite teacher has left or disliked teachers have arrived, whether the classes have changed meaning friends may be in different ones, or whether certain enjoyed activities such as sports, clubs, and hobbies have been lost. If the young person is in a job, then consider changes in managers or work colleagues.",
													"_scale-type": "((left \"no change for the worse\") (right \"really bad changes\"))"
												 }
											  ],
											  "_label": "employment",
											  "_code": "gen-employment",
											  "_persistent": "soft",
											  "_header": "Questions on employment"
										   }
										],
										"_label": "financial and employment concerns",
										"_code": "gen-finance-empl",
										"_generic-type": "gd",
										"_layer": "0",
										"_question": "Do you have reason to be concerned about risks due to the person\'s employment and/or finances?"
									 }
								  ],
								  "_label": "social context",
								  "_code": "gen-soc-contxt",
								  "_generic-type": "gd",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about risks due to the person\'s social context (relationships, living arrangements, finances, employment, any detrimental changes)?",
								  "_pathways": "(ptsd)"
							   },
							   {
								  "node": [
									 {
										"_label": "reckless risk taking",
										"_code": "gen-rsk-behavr",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person take reckless risks (eg with sexual behaviour, driving, gambling and other leisure pursuits)?",
										"_pathways": "(ptsd)",
										"_scale-type": "((left \"no reckless risks\") (right \"extremely reckless risks\"))"
									 },
									 {
										"_label": "unintentional risk making",
										"_code": "gen-unint-risk-behavr",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person\'s behaviour lead to unintentional risks (eg fire or harm due to being careless, thoughtless or forgetful; self-injurious behaviour)?",
										"_scale-type": "((left \"no unintentional risk\") (right \"high unintentional risk\"))"
									 },
									 {
										"_label": "sleep disturbance",
										"_code": "gen-sleep-dist",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person experience problems with sleeping?",
										"_help": "This includes insomnia, deprived sleep patterns, etc.",
										"_pathways": "(ptsd)",
										"_scale-type": "((left \"sleeping really well\")(right \"sleeping really badly\"))"
									 },
									 {
										"_label": "uncharacteristic recent change in behaviour",
										"_code": "gen-unusl-rec-bhvr",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Has the person been behaving out of character or unpredictably in recent weeks?",
										"_help": "Out of character is not a change in mood but something you would not expect from the person\'s particular personality and the way variations in life circumstances are usually addressed.",
										"_scale-type": "((left \"not out of character\") (right \"completely out of character\"))"
									 },
									 {
										"_label": "challenging behaviour",
										"_code": "gen-chall-bhvr",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person display challenging behaviour (eg antisocial, disruptive, resistance to advice, predatory, false accusations)",
										"_help": "Think about whether they have no consideration for other people by, for example, making a lot of noise, whether they pester and pursue others inappropriately or take advantage of vulnerable people, etc.",
										"_scale-type": "((left \"not challenging\") (right \"extremely challenging\"))"
									 },
									 {
										"node": [
										   {
											  "_label": "structure of day",
											  "_code": "gen-day-struct",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Does the person\'s day lack any structure?",
											  "_help": "Think about whether they have a timetable or regular things to do, be responsible for, or to turn up for. Are the days completely haphazard and unplanned?",
											  "_scale-type": "((left \"structured\")(right \"no structure at all\"))"
										   },
										   {
											  "_label": "general level of activity during the day",
											  "_code": "gen-day-actvty-lev",
											  "_value-mg": "(([suic >> gen-involve-social >> gen-currnt-bhvr >> gen-day-actvty >> gen-day-actvty-lev] ((INACTIVE 0.3) (UNDERACTIVE 0.1) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1))) ([sh >> gen-involve-social >> gen-currnt-bhvr >> gen-day-actvty >> gen-day-actvty-lev] ((INACTIVE 0.3) (UNDERACTIVE 0.1) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1))) ([sn >> gen-involve-social >> gen-currnt-bhvr >> gen-day-actvty >> gen-day-actvty-lev] ((INACTIVE 1) (UNDERACTIVE 0.5) (NORMAL 0) (OVERACTIVE 0) (HYPERACTIVE 0))) ([hto >> gen-involve-social >> gen-currnt-bhvr >> gen-day-actvty >> gen-day-actvty-lev] ((INACTIVE 0) (UNDERACTIVE 0) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1))) ([vuln-su >> gen-involve-social >> gen-currnt-bhvr >> gen-day-actvty >> gen-day-actvty-lev] ((INACTIVE 1) (UNDERACTIVE 0.5) (NORMAL 0) (OVERACTIVE 0.1) (HYPERACTIVE 0.3)))([absconding >> gen-involve-social >> gen-currnt-bhvr >> gen-day-actvty >> gen-day-actvty-lev] ((INACTIVE 0) (UNDERACTIVE 0) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1)))([substance-misuse >> gen-involve-social >> gen-currnt-bhvr >> gen-day-actvty >> gen-day-actvty-lev] ((INACTIVE 0) (UNDERACTIVE 0) (NORMAL 0) (OVERACTIVE 0.5) (HYPERACTIVE 1))))",
											  "_generic-type": "gd",
											  "_values": "nominal",
											  "_question": "What is the person\'s general level of activity?",
											  "_help": "Consider how the person spends his or her leisure time: is he or she slumped in front of the television or spending excessive amounts of time in a passive/inert state? If the person is unemployed, are there any efforts to get a job or fill the time with gainful work? Alternatively, is the person constantly organising and engaging in activities with no time for reflection or rest, behaving hyperactively, with no spare capacity?"
										   }
										],
										"_label": "daily activity",
										"_code": "gen-day-actvty"
									 },
									 {
										"node": [
										   {
											  "_label": "eating healthily",
											  "_code": "gen-diet-eating",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Does the person fail to eat a healthy diet?",
											  "_help": "This includes the person having very low calorie intake, eating disorders, etc.",
											  "_scale-type": "((left \"healthy diet\")(right \"very unhealthy diet\"))"
										   },
										   {
											  "node": [
												 {
													"_label": "person\'s weight",
													"_code": "gen-diet-weigt-ext",
													"_value-mg": "((EXTREME-UNDERWEIGHT 1) (UNDERWEIGHT 0.5) (WEIGHT-OK 0) (OVERWEIGHT 0.5) (EXTREME-OVERWEIGHT 1))",
													"_persistent": "soft",
													"_values": "nominal",
													"_question": "Is the person\'s weight a cause of concern? Select the appropriate description."
												 },
												 {
													"_label": "extreme weight change",
													"_code": "gen-diet-weigt-chg",
													"_value-mg": "((0 0) (10 1))",
													"_values": "scale",
													"_persistent": "soft",
													"_question": "Has the person experienced weight change in recent months?",
													"_scale-type": "((left \"no change\") (right \"extreme change (gain or loss)\"))"
												 }
											  ],
											  "_label": "weight",
											  "_code": "gen-diet-weight",
											  "_persistent": "soft"
										   },
										   {
											  "_label": "drinking",
											  "_code": "gen-diet-drink",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Does the person fail to have appropriate fluid intake (too much or too little)?",
											  "_scale-type": "((left \"fluid intake fine\")(right \"totally inappropriate fluid intake (too much/too little)\"))"
										   }
										],
										"_label": "appropriateness of diet",
										"_code": "gen-app-diet",
										"_persistent": "soft",
										"_generic-type": "g",
										"_header": "Questions about diet"
									 }
								  ],
								  "_label": "general current behaviour",
								  "_code": "gen-currnt-bhvr",
								  "_generic-type": "gd",
								  "_layer": "0",
								  "_question": "Do you have reason to be concerned about the person\'s general current behaviour (eg risk-taking, sleep patterns, daily activities, challenging behaviour)?",
								  "_pathways": "(ptsd)"
							   },
							   {
								  "node": [
									 {
										"_label": "detrimental effects of alcohol misuse",
										"_code": "gen-alc-misuse",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_layer": "0",
										"_question": "Does alcohol currently have a bad effect on the person\'s life?",
										"_scale-type": "((left \"no bad effect\") (right \"extremely bad effect\"))",
										"_screening": "0"
									 },
									 {
										"_label": "detrimental effects of drugs misuse",
										"_code": "gen-drug-misuse",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "soft",
										"_values": "scale",
										"_layer": "0",
										"_question": "Do drugs currently have a bad effect on the person\'s life?",
										"_scale-type": "((left \"no bad effect\") (right \"extremely bad effect\"))",
										"_screening": "0"
									 }
								  ],
								  "_label": "substance misuse",
								  "_code": "gen-subs-misuse",
								  "_persistent": "hard",
								  "_generic-type": "gd",
								  "_layer": "0",
								  "_filter-q": "Does the person have a history of misusing drugs or alcohol?",
								  "_screening": "0"
							   }
							],
							"_label": "involvement with life and others",
							"_code": "gen-involve-social",
							"_generic-type": "gd"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "most recent episode of sexual abuse",
											  "_code": "gen-sex-abse-last",
											  "_value-mg": "((0 1) (5 0.5))",
											  "_persistent": "soft",
											  "_values": "date-year",
											  "_question": "When was the most recent episode of sexual abuse?",
											  "_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine."
										   },
										   {
											  "_label": "sexual abuse during childhood (0 to 16)",
											  "_code": "gen-sex-abse-as-ch",
											  "_value-mg": "((YES 1) (NO 0))",
											  "_persistent": "hard",
											  "_values": "nominal",
											  "_question": "Was the first episode of sexual abuse during childhood or early adolescence?",
											  "_pathways": "(ptsd)"
										   }
										],
										"_label": "sexual abuse",
										"_code": "gen-life-sex-abuse",
										"_persistent": "hard",
										"_filter-q": "Has the person ever been sexually abused?",
										"_pathways": "(ptsd)"
									 },
									 {
										"node": [
										   {
											  "_label": "most recent episode of physical abuse",
											  "_code": "gen-phys-abse-last",
											  "_value-mg": "((0 1) (24 0.5))",
											  "_persistent": "soft",
											  "_values": "date-month",
											  "_question": "When was the most recent episode of physical abuse?",
											  "_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine."
										   },
										   {
											  "_label": "physical abuse during childhood (0 to 16)",
											  "_code": "gen-phy-abse-as-ch",
											  "_value-mg": "((YES 1) (NO 0))",
											  "_persistent": "hard",
											  "_values": "nominal",
											  "_question": "Was the first episode of physical abuse during childhood or early adolescence?",
											  "_pathways": "(ptsd)"
										   }
										],
										"_label": "physical abuse",
										"_code": "gen-phys-abse",
										"_persistent": "hard",
										"_filter-q": "Has the person ever been physically abused?",
										"_pathways": "(ptsd)"
									 },
									 {
										"node": [
										   {
											  "_label": "most recent episode of emotional abuse",
											  "_code": "gen-emot-abse-last",
											  "_value-mg": "((0 1) (24 0.5))",
											  "_persistent": "soft",
											  "_values": "date-month",
											  "_question": "When was the most recent episode of emotional abuse?",
											  "_help": "Don\'t worry if you don\'t know the exact date. An approximate date or just the year and/or month is fine."
										   },
										   {
											  "_label": "emotional abuse during childhood (0 to 16)",
											  "_code": "gen-emo-abse-as-ch",
											  "_value-mg": "((YES 1) (NO 0))",
											  "_persistent": "hard",
											  "_values": "nominal",
											  "_question": "Was the first episode of emotional abuse during childhood or early adolescence?"
										   }
										],
										"_label": "emotional abuse",
										"_code": "gen-emot-abse",
										"_persistent": "hard",
										"_filter-q": "Has the person ever been emotionally abused due to, for example, race, religion, sexual orientation, appearance?",
										"_help": "This includes the person being verbally abused, insulted, called names, emotionally bullied, constantly criticised, humiliated, etc.",
										"_pathways": "(ptsd)"
									 },
									 {
										"_label": "financial abuse",
										"_code": "gen-financial-abuse",
										"_value-mg": "((YES 1) (NO 0))",
										"_persistent": "hard",
										"_values": "nominal",
										"_question": "Has the person ever been financially abused?"
									 }
								  ],
								  "_label": "abuse to person",
								  "_code": "gen-life-abuse",
								  "_persistent": "hard",
								  "_generic-type": "g",
								  "_filter-q": "Has the person ever been the victim of any form of abuse (eg physical, sexual, financial, emotional)?",
								  "_pathways": "(ptsd)"
							   },
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "current/criminal proceedings",
											  "_code": "gen-forensic-proc-curr",
											  "_value-mg": "((YES 1) (NO 0))",
											  "_persistent": "soft",
											  "_values": "nominal",
											  "_question": "Are the serious criminal justice proceedings current?"
										   }
										],
										"_label": "forensic/criminal proceedings",
										"_code": "gen-forensic-proc",
										"_persistent": "hard",
										"_filter-q": "Has the person ever faced serious criminal justice proceedings (court cases, custodial sentences, etc)?"
									 },
									 {
										"_label": "environment person grew up in",
										"_code": "gen-env-grew-up",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "hard",
										"_values": "scale",
										"_question": "Did the person grow up in emotionally disturbed or disruptive environments?",
										"_help": "This includes difficult, violent, and chaotic, environments or ones with poor emotional attachments.",
										"_pathways": "(ptsd)",
										"_scale-type": "((left \"no disturbance/disruption\") (right \"extremely disturbed/disrupted\"))"
									 },
									 {
										"_label": "eating disorders",
										"_code": "gen-eating-dis",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "hard",
										"_values": "scale",
										"_question": "Has the person suffered from eating disorders in the past?",
										"_scale-type": "((left \"no eating disorders\") (right \"serious eating disorder\"))"
									 },
									 {
										"_label": "educational experience",
										"_code": "gen-educ-expr",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "hard",
										"_values": "scale",
										"_question": "Did the person have a bad time at school?",
										"_help": "Consider poor achievements, educational problems, bullying, unpleasant teachers, etc.",
										"_pathways": "(ptsd)",
										"_scale-type": "((left \"no problems with school\") (right \"terrible time at school\"))"
									 },
									 {
										"_label": "serious injury",
										"_code": "serious-injury",
										"_value-mg": "((0 0) (10 1))",
										"_persistent": "hard",
										"_values": "scale",
										"_question": "Has the person ever had a serious injury?",
										"_help": "Consider any accidents or events that caused a serious injury and how bad the impact was at the time.",
										"_pathways": "(ptsd)",
										"_scale-type": "((left \"no injury\") (right \"dreadful injury\"))"
									 }
								  ],
								  "_label": "other challenging experiences",
								  "_code": "other-chall-exp",
								  "_header": "Other challenging experiences"
							   }
							],
							"_label": "adverse life events",
							"_code": "adv-life-event",
							"_persistent": "hard",
							"_generic-type": "gd",
							"_filter-q": "Does the person have any adverse life events (eg suffered abuse, criminal justice proceedings, serious injury, detrimental upbringing/education, eating disorders)?",
							"_pathways": "(ptsd)"
						 },
						 {
							"node": [
							   {
								  "node": [
									 {
										"_label": "rapport",
										"_code": "gen-rapport",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "How difficult is it to have rapport with the person?",
										"_scale-type": "((left \"easy\")(right \"very difficult\"))"
									 },
									 {
										"_label": "person\'s responsiveness",
										"_code": "gen-responsve",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person unwilling to communicate or respond to questions?",
										"_help": "Consider how cooperative the person is (eg talks about problems/issues, tells you what you want to hear), time taken to respond, ability to handle questions appropriately (eg hostility to probing questions), uncommunicative (mute, withdrawn, not open, not answering), withholding information (eg person\'s plans, feelings, degree of withholding) etc.",
										"_scale-type": "((left \"willing\") (right \"extremely unwilling\"))"
									 },
									 {
										"_label": "assessor\'s uneasiness about the person",
										"_code": "gen-gut-assmnt",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Do you have an uneasy \'gut\' feeling about the person (eg about the person\'s honesty, something doesn\'t quite add up, something missing)?",
										"_scale-type": "((left \"no uneasy gut feeling\") (right \"extremely uneasy gut feeling\"))"
									 }
								  ],
								  "_label": "person\'s engagement with assessor",
								  "_code": "gen-engagement",
								  "_generic-type": "gd",
								  "_filter-q": "Are you concerned about the person\'s engagement with you during the assessment?"
							   },
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "degree of aggression/hostility",
											  "_code": "gen-risk-aggrsv",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "How aggressive/hostile is the person\'s tone of voice?",
											  "_help": "Consider the tone of voice (threatening, angry, etc); is the person shouting or, in contrast, very quiet and matter of fact?",
											  "_scale-type": "((left \"not agressive/hostile\") (right \"extremely aggressive/hostile\"))"
										   },
										   {
											  "_label": "how upbeat or downbeat/depressed",
											  "_code": "gen-risk-upbeat",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "How depressed and downbeat is the person\'s tone of voice?",
											  "_scale-type": "((left \"not depressed/downbeat\")(right \"extremely depressed/downbeat\"))"
										   }
										],
										"_label": "tone",
										"_code": "gen-risk-tone"
									 },
									 {
										"_label": "degree to which the person is making sense",
										"_code": "gen-coherence",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Is the person failing to make sense (eg incoherent, irrational)?",
										"_scale-type": "((left \"makes sense\") (right \"makes no sense at all\"))"
									 }
								  ],
								  "_label": "verbal indicators of risk",
								  "_code": "gen-risk-verbal",
								  "_generic-type": "gd",
								  "_filter-q": "Are you concerned about verbal indicators of risk?"
							   },
							   {
								  "node": [
									 {
										"_label": "body language indicating distress",
										"_code": "gen-distrss-b-lang",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person\'s body language indicate distress?",
										"_help": "This includes the person being hunched, tearful, fidgety, or preoccupied, having agitated movements or head in hands.",
										"_scale-type": "((left \"no indication\") (right \"indicates extreme distress\"))"
									 },
									 {
										"_label": "movements, posture, facial expression indicating low mood",
										"_code": "gen-low-mood",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Do the person\'s movements, posture, and facial expression indicate a low, downbeat, or gloomy mood?",
										"_help": "This includes the person being sleepy, restless, hunched, unsmiling, gloomy or morose, having stooped posture, head down, or head in hands.",
										"_scale-type": "((left \"no indication\") (right \"indicates extremely low/gloomy/downbeat mood\"))"
									 },
									 {
										"_label": "aggressive/threatening movements, posture, or expression",
										"_code": "gen-threat-move",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "How aggressive or threatening are the person\'s movements and posture?",
										"_help": "This includes the person sitting forward, clenching fists, pacing, getting very close, banging fists, digging nails into hands, etc.",
										"_scale-type": "((left \"not aggressive or threatening\")(right \"extremely aggressive or threatening\"))"
									 },
									 {
										"_label": "preoccupied/detached demeanour",
										"_code": "gen-detached",
										"_value-mg": "((0 0) (10 1))",
										"_values": "scale",
										"_question": "Does the person appear detached or preoccupied?",
										"_scale-type": "((left \"not detached or preoccupied\") (right \"extremely detached or preoccupied\"))"
									 },
									 {
										"node": [
										   {
											  "_label": "avoid eye contact",
											  "_code": "gen-avoid-eye-contact",
											  "_value-mg": "((0 0) (10 1))",
											  "_values": "scale",
											  "_question": "Does the person avoid eye contact?",
											  "_help": "consider avoidance that is deliberate or indicative of non-normal behaviour rather than something that may be cultural.",
											  "_scale-type": "((left \"no avoidance\") (right \"total avoidance\"))"
										   },
										   {
											  "_label": "eye movement",
											  "_code": "gen-eye-movement",
											  "_value-mg": "(([suic >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))) ([sh >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))) ([sn >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))) ([hto >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))) ([risk-dep >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))) ([vuln-su >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 1) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))) ([absconding >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 0) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1)))([substance-misuse >> gen-presentation >> gen-body-face >> gen-eyes >> gen-eye-movement] ((UNRESPONSIVE-GLAZED 0) (APPROPRIATE 0) (FIXED-STARING 1) (DARTING 1))))",
											  "_generic-type": "gd",
											  "_values": "nominal",
											  "_question": "How would you describe the person\'s general eye movement?"
										   }
										],
										"_label": "eyes",
										"_code": "gen-eyes",
										"_generic-type": "gd"
									 }
								  ],
								  "_label": "body language and expression",
								  "_code": "gen-body-face",
								  "_generic-type": "gd",
								  "_filter-q": "Are you concerned about the person\'s body language and expression?"
							   },
							   {
								  "_label": "congruence of physical, verbal, and emotional presentation",
								  "_code": "gen-congruence",
								  "_value-mg": "((0 0) (10 1))",
								  "_values": "scale",
								  "_question": "How inconsistent are the person\'s physical, verbal, and emotional presentations (lack of congruence)?",
								  "_scale-type": "((left \"consistent\") (right \"totally inconsistent\"))"
							   }
							],
							"_label": "person\'s behavioural presentation during assessment",
							"_code": "gen-presentation",
							"_generic-type": "gd",
							"_filter-q": "Are you concerned about the person\'s behavioural presentation with respect to potential risks (eg verbal and physical behaviour, uneasy \'gut\' feeling in yourself)?",
							"_screening": "0"
						 },
						 {
							"node": [
							   {
								  "_label": "age",
								  "_code": "gen-age",
								  "_value-mg": "(([suic >> gen-demog >> gen-age] ((14 0) (20 1) (30 0.5) (50 0) (60 0.3) (80 1))) ([sh >> gen-demog >> gen-age] ((10 0) (15 1) (20 1) (30 0.5) (60 0))) ([sn >> gen-demog >> gen-age] ((15 0) (50 0.2) (80 1))) ([hto >> gen-demog >> gen-age] ((12 0) (20 1) (25 1) (35 0.5) (50 0))) ([risk-dep >> gen-demog >> gen-age] ((18 0) (25 1) (50 0))) ([vuln-su >> gen-demog >> gen-age] ((18 1) (50 0) (70 0.8) (80 1)))([absconding >> gen-demog >> gen-age] ((12 0) (20 1) (30 1) (70 0)))([substance-misuse >> gen-demog >> gen-age] ((12 0) (20 1) (30 1) (70 0))))",
								  "_persistent": "hard",
								  "_generic-type": "gd",
								  "_values": "date-year",
								  "_question": "Date of birth"
							   },
							   {
								  "_label": "gender",
								  "_code": "gen-gender",
								  "_value-mg": "(([suic >> gen-demog >> gen-gender] ((MALE 1) (FEMALE 0))) ([sh >> gen-demog >> gen-gender] ((MALE 0) (FEMALE 1))) ([sn >> gen-demog >> gen-gender] ((MALE 1) (FEMALE 0))) ([hto >> gen-demog >> gen-gender] ((MALE 1) (FEMALE 0))) ([risk-dep >> gen-demog >> gen-gender] ((MALE 1) (FEMALE 0))) ([vuln-su >> gen-demog >> gen-gender] ((MALE 0) (FEMALE 1)))([absconding >> gen-demog >> gen-gender] ((MALE 1) (FEMALE 0)))([substance-misuse >> gen-demog >> gen-gender] ((MALE 1) (FEMALE 0))))",
								  "_persistent": "hard",
								  "_generic-type": "gd",
								  "_values": "nominal",
								  "_question": "Gender"
							   },
							   {
								  "node": [
									 {
										"_label": "living with partner",
										"_code": "partner-share-acc",
										"_value-mg": "((no 1)(yes 0))",
										"_persistent": "soft",
										"_values": "nominal",
										"_question": "Does the person live with his or her partner?"
									 }
								  ],
								  "_label": "relationship status",
								  "_code": "gen-marital-status",
								  "_persistent": "soft",
								  "_filter-q": "Does the person have a partner?"
							   },
							   {
								  "node": [
									 {
										"node": [
										   {
											  "_label": "number of dependents",
											  "_code": "gen-accom-num-dep",
											  "_value-mg": "((0 0) (8 1))",
											  "_persistent": "soft",
											  "_values": "integer",
											  "_question": "How many dependents does the person live with"
										   },
										   {
											  "_label": "age of youngest dependent",
											  "_code": "gen-dep-ygnst-age",
											  "_value-mg": "((0 1) (10 0.7) (18 0))",
											  "_persistent": "soft",
											  "_values": "integer",
											  "_question": "What is the age of the youngest dependent?"
										   }
										],
										"_label": "Dependents",
										"_code": "gen-accom-depndnts",
										"_persistent": "soft",
										"_filter-q": "Does the person live with dependents (relatives or children)?"
									 },
									 {
										"_label": "number of non-dependents sharing accommodation",
										"_code": "gen-accm-share-nd",
										"_value-mg": "((0 0)(5 1))",
										"_persistent": "soft",
										"_values": "integer",
										"_question": "How many non-dependents share the living accommodation",
										"_help": "This includes partner, carer, friends/communal, sibling(s), parent(s), and other relative(s)."
									 }
								  ],
								  "_label": "occupants sharing accommodation other than a partner",
								  "_code": "gen-accom-share",
								  "_persistent": "soft",
								  "_filter-q": "Does the person share the living accommodation with anyone who is not the partner?"
							   },
							   {
								  "_label": "ethnicity",
								  "_code": "gen-ethnicity",
								  "_value-mg": "(([suic >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))) ([sh >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))) ([sn >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))) ([hto >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))) ([risk-dep >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))) ([vuln-su >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))) ([absconding >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0)))([substance-misuse >> gen-demog >> gen-ethnicity] ((WHITE-BRITISH 0) (WHITE-IRISH 0) (OTHER-WHITE 0) (WHITE-BLACK-CARIBBEAN 0) (WHITE-BLACK-AFRICAN 0)    (WHITE-ASIAN 0) (OTHER-MIXED 0) (INDIAN 0) (PAKISTANI 0) (BANGLADESHI 0) (OTHER-ASIAN 0) (BLACK-CARIBBEAN 0)    (BLACK-AFRICAN 0) (OTHER-BLACK 0) (CHINESE 0) (OTHER-ETHNIC 0))))",
								  "_persistent": "hard",
								  "_generic-type": "gd",
								  "_values": "nominal",
								  "_question": "What is the person\'s ethnic group?"
							   },
							   {
								  "_label": "Multi-Agency Public Protection Arrangements",
								  "_code": "mappa",
								  "_value-mg": "((YES 1)(NO 0))",
								  "_persistent": "soft",
								  "_generic-type": "gd",
								  "_values": "nominal",
								  "_question": "Does the person have any Multi-Agency Public Protection Arrangements (MAPPA)?",
								  "_help": "Multi-Agency Public Protection Arrangements (MAPPA) are for people under the remit of responsible authorities for managing serious risks to the public."
							   }
							],
							"_label": "demographics",
							"_code": "gen-demog",
							"_generic-type": "gd"
						 }
					  ],
					  "_label": "direct risk children",
					  "_code": "gen-direct",
					  "_generic-type": "gd"
				   }
				],
				"_label": "general risk and safety issues",
				"_code": "generic",
				"_layer": "0",
				"_question": "These questions are not about specific risks but there are some that may help assess the patient if you have not already decided what to do. Do you wish to answer them now?",
				"_screening": "0",
				"_screening-only": "true"
			 }
		  ],
		  "_label": "mental health",
		  "_code": "mental-health-risk",
		  "_min-mg-exceptions": "(hto-sex-asslt gen-dep-stage)",
		  "_populations": "working-age",
		  "_services": "((structure ((iapt ((future-changes needed)))(service-user ((future-changes needed)))))(rendition ((service-user ((su-pop-alt-report-scale-col true)(su-pop-alt-report-scale-labels true))))))",
		  "_overall-formulation": "((title \"Risk formulation\") (headings ((problem-risks \"Risks being formulated (Problem risks)\" \"Problem\" \"What are the main risks being addressed?\") (precipitating-factors \"Risk triggers (Precipitating factors)\" \"Precipitating\" \"What factors have suddenly caused the risks to change?\") (perpetuating-factors \"Persistent contextual factors (Perpetuating)\" \"Perpetuating\" \"What are the continuous risk influences?\") (past-factors \"Past factors (Historical, Pre-existing or Predisposing)\" \"Pre-existing\" \"What historic factors influence the risks?\") (protective-factors \"Protective factors\" \"Protective\" \"What factors are lowering the risks?\")(risk-escalators \"Risk escalators (changes that would dangerously increase risks)\" \"Escalators\" \"What factors would immediately raise risks if they were to change?\"))))",
		  "_overall-management": "((title \"Safety Plan\"))",
		  "_help": "Please note: Risks should be assessed in the context of the person\'s circumstances following the assessment. This may be the same as the current circumstances but if, for example, they are being referred elsewhere or discharged, the risks should be considered for the new situation."
	   }