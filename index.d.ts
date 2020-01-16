ineLayerStyle | FillLayerStyle |
    FillExtrusionLayerStyle | CircleLayerStyle | BackgroundLayerStyle
    };

declare namespace MapboxGL {
    function setAccessToken(accessToken: string): void;
        function getAccessToken(): Promise<void>;
	    function setTelemetryEnabled(telemetryEnabled: boolean): void;
	        function isTelemetryEnabled(): Promise<void>;

    /**
         * Components
	      */
	          class MapView extends Component<MapViewProps> {
		          getPointInView(coordinate: Array<number>): Promise<void>;
			          getCoordinateFromView(point: Array<number>): Promise<void>;
				          getVisibleBounds(): Promise<void>;
					          queryRenderedFeaturesAtPoint(coordinate: Array<number>, filter?: Array<string>, layerIds?: Array<string>): Promise<void>;
						          queryRenderedFeaturesInRect(coordinate: Array<number>, filter?: Array<string>, layerIds?: Array<string>): Promise<void>;
							          fitBounds(northEastCoordinates: Array<number>, southWestCoordinates: Array<number>, padding?: number, duration?: number): void;
								          flyTo(coordinates: Array<number>, duration?: number): void;
									          moveTo(coordinates: Array<number>, duration?: number): void;
										          zoomTo(zoomLevel: number, duration?: number): void;
											          setCamera(config: any): void;
												          takeSnap(writeToDisk: boolean): Promise<string>;
													          getZoom(): Promise<number>;
														          getCenter(): Promise<Array<number>>;
															      }

    class Light extends Component<LightProps> { }

    class StyleSheet extends Component {
            static create<T extends NamedStyles<T> | NamedStyles<any>>(styles: T): void;
	            camera(stops: { [key: number]: string }, interpolationMode?: InterpolationMode): void;
		            source(stops: { [key: number]: string }, attributeName: string, interpolationMode?: InterpolationMode): void;
			            composite(stops: { [key: number]: string }, attributeName: string, interpolationMode?: InterpolationMode): void;

        identity(attributeName: string): number;
	    }

    class PointAnnotation extends Component<PointAnnotationProps> { }
        class Callout extends Component<CalloutProps> { }

    /**
         * Sources
	      */
	          class VectorSource extends Component<VectorSourceProps> { }
		      class ShapeSource extends Component<ShapeSourceProps> { }
		          class RasterSource extends Component<RasterSourceProps> { }

    /**
         * Layers
	      */
	          class BackgroundLayer extends Component<BackgroundLayerProps> { }
		      class CircleLayer extends Component<CircleLayerProps> { }
		          class FillExtrusionLayer extends Component<FillExtrusionLayerProps> { }
			      class FillLayer extends Component<FillLayerProps> { }
			          class LineLayer extends Component<LineLayerProps> { }
				      class RasterLayer extends Component<RasterLayerProps> { }
				          class SymbolLayer extends Component<SymbolLayerProps> { }


    /**
         * Offline
	      */
	          class offlineManager extends Component {
		          createPack(options: OfflineCreatePackOptions, progressListener?: () => void, errorListener?: () => void): void;
			          deletePack(name: string): Promise<void>;
				          getPacks(): Promise<void>;
					          getPack(name: string): Promise<void>;
						          setTileCountLimit(limit: number): void;
							          setProgressEventThrottle(throttleValue: number): void;
								          subscribe(packName: string, progressListener: () => void, errorListener: () => void): void;
									          unsubscribe(packName: string): void;
										      }

    class snapshotManager extends Component {
            takeSnap(options: SnapshotOptions): Promise<void>;
	        }

    /**
         * Constants
	      */
	          enum UserTrackingModes {
		          None = 0,
			          Follow = 1,
				          FollowWithCourse = 2,
					          FollowWithHeading = 3,
						      }

    enum InterpolationMode {
            Exponential = 0,
	            Categorical = 1,
		            Interval = 2,
			            Identity = 3,
				        }

    enum StyleURL {
            Street = 0,
	            Dark = 1,
		            Light = 2,
			            Outdoors = 3,
				            Satellite = 4,
					            SatelliteStreeet = 5,
						            TrafficDay = 6,
							            TrafficNight = 7
								        }

    enum StyleSource {
            DefaultSourceID = 0
	        }
		}

interface MapViewProps extends ViewProperties {
    animated?: boolean;
        centerCoordinate?: Array<number>;
	    showUserLocation?: boolean;
	        userTrackingMode?: number;
		    userLocationVerticalAlignment?: number;
		        contentInset?: Array<number>;
			    heading?: number;
			        pitch?: number;
				    style?: any;
				        styleURL?: MapboxGL.StyleURL;
					    zoomLevel?: number;
					        minZoomLevel?: number;
						    maxZoomLevel?: number;
						        localizeLabels?: boolean;
							    zoomEnabled?: boolean;
							        scrollEnabled?: boolean;
								    pitchEnabled?: boolean;
								        rotateEnabled?: boolean;
									    attributionEnabled?: boolean;
									        logoEnabled?: boolean;
										    compassEnabled?: boolean;
										        surfaceView?: boolean;
											    regionWillChangeDebounceTime?: number;
											        regionDidChangeDebounceTime?: number;

    onPress?: () => void;
        onLongPress?: () => void;
	    onRegionWillChange?: () => void;
	        onRegionIsChanging?: () => void;
		    onRegionDidChange?: () => void;
		        onUserLocationUpdate?: () => void;
			    onWillStartLoadingMap?: () => void;
			        onDidFinishLoadingMap?: () => void;
				    onDidFailLoadingMap?: () => void;
				        onWillStartRenderingFrame?: () => void;
					    onDidFinishRenderingFrame?: () => void;
					        onDidFinishRenderingFrameFully?: () => void;
						    onWillStartRenderingMap?: () => void;
						        onDidFinishRenderingMap?: () => void;
							    onDidFinishRenderingMapFully?: () => void;
							        onDidFinishLoadingStyle?: () => void;
								    onUserTrackingModeChange?: () => void;
								    }

interface LightStyle {
    anchor?: Alignment;
        position?: Array<number>;
	    color?: string;
	        intensity?: number;
		}

interface BackgroundLayerStyle {
    visibility?: Visibility;
        backgroundColor?: string;
	    backgroundPattern?: string;
	        backgroundOpacity?: number;
		}

interface CircleLayerStyle {
    visibility?: Visibility;
        circleRadius?: number;
	    circleColor?: string;
	        circleBlur?: number;
		    circleOpacity?: number;
		        circleTranslate?: Array<number>;
			    circleTranslateAnchor?: Alignment;
			        circlePitchScale?: Alignment;
				    circlePitchAlignment?: Alignment;
				        circleStrokeWidth?: number;
					    circleStrokeColor?: string;
					        circleStrokeOpacity?: number;
						}

interface FillExtrusionLayerStyle {
    visibility?: Visibility;
        fillExtrusionColor?: string;
	    fillExtrusionOpacity?: number;
	        fillExtrusionTranslate?: Array<number>;
		    fillExtrusionTranslateAnchor?: Alignment;
		        fillExtrusionPattern?: string;
			    fillExtrusionHeight?: number;
			        fillExtrusionBase?: number;
				}

interface FillLayerStyle {
    visibility?: Visibility;
        fillAntialias?: boolean;
	    fillOpacity?: number;
	        fillColor?: string;
		    fillOutlineColor?: string;
		        fillTranslate?: Array<number>;
			    fillTranslateAnchor?: Alignment;
			        fillPattern?: string;
				}

interface LineLayerStyle {
    lineCap?: 'butt' | 'round' | 'square';
        lineJoin?: 'bevel' | 'round' | 'miter';
	    lineMiterLimit?: number;
	        lineRoundLimit?: number;
		    visibility?: Visibility;
		        lineOpacity?: number;
			    lineColor?: string;
			        lineTranslate?: Array<number>;
				    lineTranslateAnchor?: Alignment;
				        lineWidth?: number;
					    lineGapWidth?: number;
					        lineOffset?: number;
						    lineBlur?: number;
						        lineDasharray?: Array<number>;
							    linePattern?: string;
							    }

interface RasterLayerStyle {
    visibility?: Visibility;
        rasterOpacity?: number;
	    rasterHueRotate?: number;
	        rasterBrightnessMin?: number;
		    rasterBrightnessMax?: number;
		        rasterSaturation?: number;
			    rasterContrast?: number;
			        rasterFadeDuration?: number;
				}

interface SymbolLayerStyle {
    symbolPlacement?: 'point' | 'line';
        symbolSpacing?: number;
	    symbolAvoidEdges?: boolean;
	        iconAllowOverlap?: boolean;
		    iconIgnorePlacement?: boolean;
		        iconOptional?: boolean;
			    iconRotationAlignment?: AutoAlignment;
			        iconSize?: number;
				    iconTextFit?: 'none' | 'width' | 'height' | 'both';
				        iconTextFitPadding?: Array<number>;
					    iconImage?: string;
					        iconRotate?: number;
						    iconPadding?: number;
						        iconKeepUpright?: boolean;
							    iconOffset?: Array<number>
							        iconAnchor?: Anchor;
								    iconPitchAlignment?: AutoAlignment;
								        textPitchAlignment?: AutoAlignment;
									    textRotationAlignment?: AutoAlignment;
									        textField?: string;
										    textFont?: Array<string>;
										        textSize?: number;
											    textMaxWidth?: number;
											        textLineHeight?: number;
												    textLetterSpacing?: number;
												        textJustify?: 'left' | 'center' | 'right';
													    textAnchor?: Anchor;
													        textMaxAngle?: number;
														    textRotate?: number;
														        textPadding?: number;
															    textKeepUpright?: boolean;
															        textTransform?: 'none' | 'uppercase' | 'lowercase';
																    textOffset?: Array<number>;
																        textAllowOverlap?: boolean;
																	    textIgnorePlacement?: boolean;
																	        textOptional?: boolean;
																		    visibility?: Visibility;
																		        iconOpacity?: number;
																			    iconColor?: string;
																			        iconHaloColor?: string;
																				    iconHaloWidth?: number;
																				        iconHaloBlur?: number;
																					    iconTranslate?: Array<number>
																					        iconTranslateAnchor?: Alignment;
																						    textOpacity?: number;
																						        textColor?: string;
																							    textHaloColor?: string;
																							        textHaloWidth?: number;
																								    textHaloBlur?: number;
																								        textTranslate?: Array<number>;
																									    textTranslateAnchor?: Alignment;
																									    }

interface Point {
    x: number;
        y: number;
	}

interface LightProps {
    style: LightStyle;
    }

interface PointAnnotationProps {
    id: string;
        title?: string;
	    snippet?: string;
	        selected?: boolean;
		    coordinate: Array<number>;
		        anchor?: Point;
			    onSelected?: () => void;
			        onDeselected?: () => void;
				}

interface CalloutProps {
    id?: string;
        url?: string;
	    onPress?: () => void;
	        hitbox?: any;
		    title?: string;
		    }

interface VectorSourceProps {
    title?: string;
        style?: ViewStyle;
	    containerStyle?: ViewStyle;
	        contentStyle?: ViewStyle;
		    tipStyle?: ViewStyle;
		        textStyle?: ViewStyle;
			}

interface ShapeSourceProps {
    id?: string;
        url?: string;
	    shape?: any;
	        cluter?: boolean;
		    clusterRadius?: number;
		        clusterMaxZoomLevel?: number;
			    maxZoomLevel?: number;
			        buffer?: number;
				    tolerance?: number;
				        images?: any;
					    onPress?: (e: any) => void;
					        hitbox?: any;
						}

interface RasterSourceProps {
    id?: MapboxGL.StyleSource;
        url?: string;
	    minZoomLevel?: number;
	        maxZoomLevel?: number;
		    tileSize?: number;
		        tms?: boolean;
			    attribution?: string;
			    }

interface LayerBaseProps {
    id?: string;
        sourceID?: MapboxGL.StyleSource;
	    sourceLayerID?: string;
	        aboveLayerID?: string;
		    belowLayerID?: string;
		        layerIndex?: number;
			    filter?: Array<string>;
			        minZoomLevel?: number;
				    maxZoomLevel?: number;
				    }

interface BackgroundLayerProps extends LayerBaseProps {
    style?: BackgroundLayerStyle;
    }

interface CircleLayerProps extends LayerBaseProps {
    style?: CircleLayerStyle;
    }

interface FillExtrusionLayerProps extends LayerBaseProps {
    style?: FillExtrusionLayerStyle;
    }

interface FillLayerProps extends LayerBaseProps {
    style?: FillLayerStyle;
    }

interface LineLayerProps extends LayerBaseProps {
    style?: LineLayerStyle;
    }

interface RasterLayerProps extends LayerBaseProps {
    style?: RasterLayerStyle;
    }

interface SymbolLayerProps extends LayerBaseProps {
    style?: SymbolLayerStyle;
    }

interface OfflineCreatePackOptions {
    name?: string;
        styleURL?: MapboxGL.StyleURL;
	    bounds?: Array<number>;
	        minZoom?: number;
		    maxZoom?: number;
		        metadata?: any;
			}

interface SnapshotOptions {
    centerCoordinate?: Array<number>;
        width?: number;
	    height?: number;
	        zoomLevel?: number;
		    pitch?: number;
		        heading?: number;
			    styleURL?: MapboxGL.StyleURL;
			        writeToDisk?: boolean;
				}

export default MapboxGL;